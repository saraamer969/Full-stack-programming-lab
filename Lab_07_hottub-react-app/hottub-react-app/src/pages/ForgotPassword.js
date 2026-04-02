import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => (
  <div className="container">
    <div className="content-wrap">
      <h1>Forgot Your Password?</h1>
      <div className="form-section" style={{maxWidth: '400px'}}>
        <p>Enter your email to reset your password.</p>
        <div className="form-row">
          <label>Email Address*</label>
          <input type="email" />
        </div>
        <div style={{marginTop: '20px', display: 'flex', gap: '10px'}}>
          <button className="btn-red">RESET PASSWORD</button>
          <Link to="/login" className="btn-gray" style={{textDecoration: 'none', padding: '10px'}}>BACK TO LOGIN</Link>
        </div>
      </div>
    </div>
  </div>
);

export default ForgotPassword;