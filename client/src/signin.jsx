import React, { useState } from 'react';
import './SignIn.css';
import Axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3006/signin', {
      email: email,
      password: password
    })
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label className="input-label">
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </label>
        <br />

        <label className="input-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </label>
        <br />

        <button type="submit" className="submit-button">
          Sign In
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default SignIn;
