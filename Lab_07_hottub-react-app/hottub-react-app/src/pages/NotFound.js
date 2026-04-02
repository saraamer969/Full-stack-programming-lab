import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
    <h1 style={{ fontSize: '64px', color: '#c00' }}>404</h1>
    <h2>Oops! Page Not Found</h2>
    <p>The page you are looking for doesn't exist or has been moved.</p>
    <Link to="/" className="btn-red" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
      Back to Home
    </Link>
  </div>
);

export default NotFound;