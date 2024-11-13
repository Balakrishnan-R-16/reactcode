import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import FAQ from './components/FAQ';
import Support from './components/Support';
import About from './components/About';
import Payment from './components/Payment'; 


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check local storage for authentication status when the app loads
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Handler to set authentication state after login
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store the auth status
  };

  // Handler for logging out (if needed)
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove auth status from storage
  };

  return (
    <Router>
      <Routes>
        {/* Sign Up Page */}
        <Route path="/" element={<SignUp />} />

        {/* Login Page */}
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} 
        />

        {/* Protect the landing page route */}
        <Route 
          path="/landing" 
          element={isAuthenticated ? <LandingPage onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />

        {/* Payment Page */}
        <Route 
          path="/payment" 
          element={isAuthenticated ? <Payment /> : <Navigate to="/login" />} 
        />

        {/* Additional Routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
