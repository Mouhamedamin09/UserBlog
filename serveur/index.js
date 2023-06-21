const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'userschema'
});

app.post('/signup', (req, res) => {
  const { name, lastName, age, email, password, phoneNumber, gender } = req.body;
  console.log(req.body);

  db.query(
    'INSERT INTO user (name, lastName, age, email, password, phoneNumber, gender) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [name, lastName, age, email, password, phoneNumber, gender],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error inserting data');
      } else {
        res.send('Value inserted');
      }
    }
  );
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
  
    db.query(
      'SELECT email, password FROM user WHERE email = ?',
      [email],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error retrieving data');
        } else {
          if (result.length > 0) {
            const user = result[0];
            if (user.password === password) {
              res.send('Password is correct');
            } else {
              res.send('Password is incorrect');
            }
          } else {
            res.send('email not found');
          }
        }
      }
    );
  });
  

app.listen(3006, () => {
  console.log('Server listening on port 3006');
});
