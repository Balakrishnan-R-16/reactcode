// src/components/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography paragraph>
        Welcome to our bus ticket booking platform. We are committed to providing the best service to our customers.
      </Typography>
      <Typography paragraph>
        Our company was founded with the goal of making bus travel easy and accessible to everyone. We partner with bus operators to bring you a wide selection of routes and services.
      </Typography>
      <Typography paragraph>
        Thank you for choosing us for your travel needs. We look forward to serving you.
      </Typography>
    </Container>
  );
};

export default About;
