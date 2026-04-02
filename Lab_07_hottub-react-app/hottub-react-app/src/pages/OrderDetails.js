import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = () => (
  <div className="container">
    <div className="breadcrumb"><Link to="/">Home</Link> › My Account › Order Details</div>
    <div className="content-wrap">
      <h1>Order Details</h1>
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:'15px'}}>
        <div><strong>Order #303</strong><br/>Placed on Dec 18, 2014</div>
        <div><strong>Status:</strong> <span style={{color:'#f90'}}>On Hold</span></div>
      </div>
      <table className="order-info-table">
        <thead>
          <tr><th>Product</th><th>SKU</th><th>Price</th><th>Qty</th><th>Subtotal</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>The Cabaret 3 Person 41 Jet Hot Tub</td>
            <td>CAB-3P-110V</td>
            <td>$699.00</td>
            <td>1</td>
            <td>$699.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OrderDetails;