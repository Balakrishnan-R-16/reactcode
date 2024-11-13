// src/components/Footer.js
import React from 'react';
// import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <Link to='/faq'>FAQ</Link>
      <Link to="/support">SUPPORT</Link>  
      <Link to='/about'>ABOUT</Link>  
      </footer>
  );
}

export default Footer;
