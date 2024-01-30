import React, { useState } from "react";
import axios from 'axios';
import '/Users/sabrina/hot-seat-game/src/Login.css';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Login or Register</h1>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
