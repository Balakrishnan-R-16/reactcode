import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const FAQ = () => {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the query submission logic here (e.g., sending the query to a server)
    setSubmitted(true);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="h6" gutterBottom>
        Question 1: How do I book a bus ticket?
      </Typography>
      <Typography paragraph>
        Answer: You can book a bus ticket by selecting your departure and arrival locations, date, and time on the homepage.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Question 2: How can I contact support?
      </Typography>
      <Typography paragraph>
        Answer: You can reach out to our support team via email or visit the support section.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Can't find your question? Ask us!
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Question"
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      {submitted && (
        <Typography variant="body1" color="success" style={{ marginTop: '16px' }}>
          Thank you! Your question has been submitted.
        </Typography>
      )}
      {submitted&&<Typography>Your Queries:</Typography>}
      {
        submitted&&<Typography>
          {query}
        </Typography>
      }
    </Container>
  );
};

export default FAQ;
