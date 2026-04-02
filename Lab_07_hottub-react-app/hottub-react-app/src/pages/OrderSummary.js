import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> <span>›</span> <Link to="/account">My Account</Link> <span>›</span> Order Summary
      </div>
      <div className="content-wrap">
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Order Summary</h1>
        <div className="cart-success" style={{ marginBottom: '16px', padding: '10px', background: '#e6fffa', border: '1px solid #38b2ac', color: '#234e52' }}>
          Thank you! Your order #307 has been placed successfully.
        </div>

        <div style={{ marginBottom: '14px' }}>
          <strong style={{ fontSize: '14px' }}>Order #307</strong>
          <span style={{ fontSize: '12px', color: '#666', marginLeft: '10px' }}>December 18, 2014</span>
        </div>

        <table className="order-info-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
          <thead>
            <tr style={{ background: '#f4f4f4', textAlign: 'left' }}>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Product</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Price</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Qty</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                <Link to="/product" style={{ color: '#c00', textDecoration: 'none', fontWeight: 'bold' }}>
                  The Cabaret 3 Person 41 Jet Hot Tub - 220V
                </Link><br />
                <span style={{ fontSize: '11px', color: '#666' }}>220 V/50 AMP – 4.5KW Heater</span>
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>$799.00</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>$799.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr><td colSpan="3" style={{ textAlign: 'right', padding: '5px' }}>Subtotal:</td><td style={{ padding: '5px' }}>$799.00</td></tr>
            <tr><td colSpan="3" style={{ textAlign: 'right', padding: '5px' }}>Shipping:</td><td style={{ padding: '5px' }}>Free</td></tr>
            <tr className="order-total-row">
              <td colSpan="3" style={{ textAlign: 'right', padding: '10px', fontWeight: 'bold' }}>Order Total:</td>
              <td style={{ padding: '10px', color: '#c00', fontWeight: 'bold' }}>$799.00</td>
            </tr>
          </tfoot>
        </table>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '16px' }}>
          <div className="address-card" style={{ padding: '15px', border: '1px solid #ddd', background: '#fff' }}>
            <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Billing Address</h4>
            <p style={{ fontSize: '13px', lineHeight: '1.6' }}>Farrukh Javaid<br />Hottub Spas<br />Plot 10 Tech Society<br />California, CA 20112<br />United State</p>
          </div>
          <div className="address-card" style={{ padding: '15px', border: '1px solid #ddd', background: '#fff' }}>
            <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Shipping Address</h4>
            <p style={{ fontSize: '13px', lineHeight: '1.6' }}>Farrukh Javaid<br />Hottub Spas<br />Plot 10 Tech Society<br />California, CA 20112<br />United State</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;