import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="breadcrumb">Home › Shopping Cart</div>
      <div className="content-wrap" style={{ background: '#fff', padding: '20px' }}>
        <h1 style={{ fontSize: '20px' }}>Shopping Cart</h1>
        <table className="cart-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f4f4f4' }}>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/images/cabaret1.png" width="80" alt="item" /> The Cabaret Spa</td>
              <td>$799.00</td>
              <td><input type="number" defaultValue="1" style={{ width: '40px' }} /></td>
              <td>$799.00</td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <button className="btn-gray" onClick={() => navigate('/')}>Continue Shopping</button>
          <button className="btn-red" onClick={() => navigate('/checkout')} style={{ marginLeft: '10px' }}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;