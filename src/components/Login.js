// src/components/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../styles/Login.css';
import axios from 'axios';  // For making API requests

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');         // State for email input
  const [password, setPassword] = useState('');   // State for password input
  const [error, setError] = useState('');         // State for showing error messages
  const navigate = useNavigate();                 // To navigate between pages

  // Handle login function with async/await
  const handleLogin = async () => {
    try {
      // Fetch users from the JSON server
      const response = await axios.get('http://localhost:3001/users');
  
      // Check if the user exists with the entered credentials
      const user = response.data.find(user => user.email === email && user.password === password);
  
      if (user) {
        onLogin();  // Call parent function to mark the user as authenticated
        navigate('/landing');  // Navigate to the landing page on success
      } else {
        setError('Invalid email or password');  // Show error message if credentials are wrong
      }
    } catch (error) {
      console.error('Error:', error);  // Log any error for debugging
      setError('Login failed. Please try again.');  // Display generic login error
    }
  };
  

  return (
    <>
      <Header />  {/* Header Component */}
      <Container className="login-container" sx={{ height: '280px', width: '350px', opacity: '0.888' }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Login
        </Typography>
        
        {/* Show error message if exists */}
        {error && <Typography color="error">{error}</Typography>}
        
        <div className="login-form">
          {/* Email input field */}
          <TextField 
            label="Email" 
            type="email" 
            variant="outlined" 
            fullWidth 
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Update email state on change
          />
          
          <div id="di"></div>

          {/* Password input field */}
          <TextField 
            label="Password" 
            type="password" 
            variant="filled" 
            fullWidth 
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Update password state on change
          />
          
          <div id="di"></div>

          {/* Login Button */}
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Login;
