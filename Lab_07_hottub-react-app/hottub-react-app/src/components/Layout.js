import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header id="site-header" style={{ padding: '20px', background: '#fff', borderBottom: '1px solid #ddd' }}>
    <nav className="container">
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '24px', color: '#c00', textDecoration: 'none' }}>HotSpring</Link>
      <div style={{ float: 'right' }}>
        <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
        <Link to="/cart">Cart 🛒</Link>
      </div>
    </nav>
  </header>
);

export const Footer = () => (
  <footer id="site-footer" style={{ padding: '40px 0', background: '#333', color: '#fff', marginTop: '40px' }}>
    <div className="container">
      <p>&copy; 2026 HotSpring Portable Spas. All Rights Reserved.</p>
      <Link to="/terms" style={{ color: '#ccc' }}>Terms & Conditions</Link>
    </div>
  </footer>
);

const Layout = ({ children }) => (
  <>
    <Header />
    <main style={{ background: 'linear-gradient(180deg, #c8d8e8 0%, #e8ecef 30%)', minHeight: '80vh' }}>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;