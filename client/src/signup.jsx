import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'

function Signup() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values using the state variables
        console.log(name,email,password,gender,phoneNumber)
      
        Axios.post('http://localhost:3006/signup',{
          name:name,
          lastName:lastName,
           age:age,
           email:email,
           password:password,
           phoneNumber:phoneNumber,
          gender:gender
        
        }).then(() =>{
          console.log("Rahi data tpostet")
        }).catch((error) =>{
          console.log(error)
        })


  
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </label>
        <br />

        <label className="label">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
          />
        </label>
        <br />

        <label className="label">
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
          />
        </label>
        <br />

        <label className="label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </label>
        <br />

        <label className="label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </label>
        <br />

        <label className="label">
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input"
          />
        </label>
        <br />

        <label className="label">
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />

        <button type="submit" className="button">Sign In</button>
      </form>
    </div>
  );
}

export default Signup;
