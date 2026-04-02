import React from 'react';

const Checkout = () => (
  <div className="container">
    <div className="content-wrap">
      <h1>Secure Checkout</h1>
      <div className="checkout-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
        <div className="step-box">
          <h3>Step 1: Billing Address</h3>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="step-box">
          <h3>Step 2: Payment Method</h3>
          <div><input type="radio" name="pay" /> Credit Card</div>
          <div><input type="radio" name="pay" /> PayPal</div>
        </div>
      </div>
      <button className="btn-red" style={{marginTop: '20px', width: '100%'}}>PLACE ORDER</button>
    </div>
  </div>
);

export default Checkout;