import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import '../styles/SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Send a POST request to the JSON server with email and password
      const response = await axios.post('http://localhost:3001/users', {
        email,
        password
      });
      console.log(response.data);  // Check the response to ensure it's correct
      navigate('/login'); // Redirect to login after successful sign-up
    } catch (error) {
      console.error('Error signing up:', error);
      alert('There was an error signing up. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <Container className="signup-container" sx={{ height: '280px', width: '350px', opacity: '0.888' }}>
        <Typography variant="h4" gutterBottom textAlign={'center'}>
          Sign Up
        </Typography>
        <div className="signup-form">
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            sx={{ width: '300px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <div id="di"></div>
          <TextField
            label="Password"
            type="password"
            variant="filled"
            sx={{ width: '300px', textAlign: 'center' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          <div id="di"></div>
          <Button variant="contained" color="primary" onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
