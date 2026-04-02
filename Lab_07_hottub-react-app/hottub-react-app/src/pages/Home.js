import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = [
    { id: 1, name: "XS SCYBA X SERUES 119", img: "product.png" },
    { id: 2, name: "XS SCYBA X SERUES 119", img: "product2.png" },
    { id: 3, name: "XS SCYBA X SERUES 119", img: "product3.png" },
    { id: 4, name: "XS SCYBA X SET+ES 119", img: "product4.png" },
  ];

  return (
    <div className="container">
      {/* HERO SLIDER */}
      <div className="hero-slider" style={{ background: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <div className="hero-slide" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="hero-text" style={{ flex: 1 }}>
            <h2 style={{ color: '#c00' }}>Barrier Reef 158 Jet<br/>TV- Stereo - Home Theater<br/>Supter Spa</h2>
            <p>Extra Large and Deep 8 Person</p>
            <div className="hero-price" style={{ fontSize: '24px', fontWeight: 'bold', margin: '15px 0' }}>$4,899.00</div>
            <Link to="/product" className="btn-red" style={{ textDecoration: 'none' }}>More Details</Link>
          </div>
          <div className="hero-img" style={{ flex: 1 }}>
            <img src="/images/banner.png" alt="Spa Tub" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} className="product-card" style={{ background: '#fff', padding: '15px', textAlign: 'center', border: '1px solid #ddd' }}>
            <img src={`/images/${product.img}`} alt={product.name} style={{ maxWidth: '100%' }} />
            <div className="prod-name" style={{ fontWeight: 'bold', margin: '10px 0' }}>{product.name}</div>
            <div className="prod-price" style={{ color: '#c00', fontWeight: 'bold' }}>$500.00</div>
            <Link to="/cart" className="add-to-cart-btn" style={{ display: 'block', marginTop: '10px', textDecoration: 'none' }}>🛒 ADD TO CART</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;