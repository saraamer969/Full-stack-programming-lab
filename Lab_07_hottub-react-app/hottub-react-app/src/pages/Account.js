import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => (
  <div className="container">
    <div className="breadcrumb"><Link to="/">Home</Link> › My Account</div>
    <div className="content-wrap">
      <h1>User Profile Details</h1>
      <div className="account-section">
        <h3>User profile</h3>
        <p>Hello User! From your account you can view recent orders and manage addresses.</p>
        <Link to="/edit-profile">Edit your password and account details.</Link>
      </div>
      <div className="account-section">
        <h3>Recent Orders</h3>
        <table className="orders-table">
          <thead>
            <tr><th>Order</th><th>Date</th><th>Status</th><th>Total</th><th>Options</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>#303</td>
              <td>Dec 18, 2014</td>
              <td>On hold</td>
              <td>$699.00</td>
              <td><Link to="/order-details" className="view-btn">VIEW ORDER</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Account;