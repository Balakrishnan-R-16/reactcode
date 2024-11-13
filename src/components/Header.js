import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <AppBar position="static" className="header" sx={{
      backgroundColor:'black',
    }}>
      <Toolbar disableGutters> {/* Ensure that the Toolbar does not add extra padding */}
        <div className="header-left">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/20/38/89/1000_F_320388953_j2DOQNdq5og1zrpipaqJWahiHLqm54ee.jpg"
            alt="Busify Logo"
            className="header-logo"
          />
          <Typography variant="h6">
            Busify
          </Typography>
        </div>
        <div className="header-right">
          <Link to="/" className="header-link">Sign Up</Link>
          <Link to="/login" className="header-link">Login</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
