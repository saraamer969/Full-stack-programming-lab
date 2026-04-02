import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div className="breadcrumb"><Link to="/">Home</Link> <span>›</span> My Account</div>
      <div className="content-wrap">
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Login Or Create Account</h1>
        <div className="login-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div className="form-section">
            <h3>User Login Details</h3>
            <div className="form-row">
              <label>Email *</label>
              <input type="email" style={{ width: '100%', padding: '8px' }} />
            </div>
            <div className="form-row" style={{ marginTop: '10px' }}>
              <label>Password *</label>
              <input type="password" style={{ width: '100%', padding: '8px' }} />
            </div>
            <button className="btn-red" style={{ marginTop: '20px' }} onClick={() => navigate('/account')}>SIGN IN</button>
          </div>
          <div className="form-section">
            <h3>New Customer</h3>
            <p>Register to track orders and more.</p>
            <button className="btn-red" onClick={() => navigate('/register')}>CREATE NEW ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;