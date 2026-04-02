import React, { useState } from 'react';

const ProductDetail = () => {
  const [qty, setQty] = useState(1);

  return (
    <div className="container" style={{ padding: '20px 0' }}>
      <div className="breadcrumb">Home › Product Detail</div>
      <div className="content-wrap" style={{ background: '#fff', padding: '20px' }}>
        <h2>Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h2>
        <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '20px' }}>
          {/* Image Section */}
          <div className="product-images">
            <img src="images/product2.png" alt="Spa" style={{ width: '100%' }} />
          </div>
          
          {/* Info Section */}
          <div className="product-info">
            <div className="sale-price" style={{ fontSize: '24px', color: '#c00', fontWeight: 'bold' }}>$1,979.00</div>
            <table className="spec-table" style={{ width: '100%', marginTop: '20px' }}>
              <tbody>
                <tr><td>Capacity</td><td>6 Persons</td></tr>
                <tr><td>Pumps</td><td>2 X 5HP</td></tr>
              </tbody>
            </table>
          </div>

          {/* Price Calculator Section */}
          <div className="price-calc" style={{ border: '1px solid #ddd', padding: '15px' }}>
            <h4>Price Calculator</h4>
            <label>Quantity:</label>
            <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} style={{ width: '50px' }} />
            <div style={{ margin: '15px 0', fontWeight: 'bold' }}>Total: $650.00</div>
            <button className="btn-red" style={{ width: '100%' }}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;