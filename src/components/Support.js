// src/components/Support.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Support = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Support
      </Typography>
      <Typography paragraph>
        If you need help with your booking, or if you have any other questions, feel free to contact our support team.
      </Typography>
      <Typography paragraph>
        You can reach us at:
      </Typography>
      <Typography paragraph>
        Email: busticketbooking@gmail.com
      </Typography>
      <Typography paragraph>
        Phone: +91 98765 43210
      </Typography>
    </Container>
  );
};

export default Support;
