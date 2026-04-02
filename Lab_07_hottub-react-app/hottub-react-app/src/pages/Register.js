import React from 'react';

const Register = () => (
  <div className="container">
    <div className="breadcrumb">Home › Register</div>
    <div className="content-wrap">
      <h1>Create New Account</h1>
      <div className="form-section" style={{maxWidth:'500px'}}>
        <h3>User Account Details</h3>
        <div className="form-row">
          <label>Email Address *</label>
          <input type="email" />
        </div>
        <div className="form-row">
          <label>Password *</label>
          <input type="password" />
        </div>
        <div className="form-row">
          <label>Confirm Password *</label>
          <input type="password" />
        </div>
        <button className="btn-red" style={{marginTop:'20px'}}>CREATE ACCOUNT</button>
      </div>
    </div>
  </div>
);

export default Register;