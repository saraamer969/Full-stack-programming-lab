import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="container">
      <div className="breadcrumb"><Link to="/">Home</Link> <span>›</span> Terms & Conditions</div>
      <div className="page-content" style={{ background: '#fff', padding: '30px', marginTop: '20px', borderRadius: '4px' }}>
        <h1 style={{ borderBottom: '2px solid #c00', paddingBottom: '10px', marginBottom: '20px' }}>Terms & Conditions</h1>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', color: '#333' }}>1. Introduction</h2>
          <p>Welcome to HotSpring Portable Spas. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', color: '#333' }}>2. Use of the Website</h2>
          <p>This website is intended for personal, non-commercial use. You may not reproduce, duplicate, copy, sell, or otherwise exploit the website for any commercial purpose without express written consent.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', color: '#333' }}>3. Product Information</h2>
          <p>We attempt to be as accurate as possible. However, we do not warrant that product descriptions or other content of this site is accurate, complete, or error-free.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', color: '#333' }}>6. Returns & Refunds</h2>
          <p>We offer a 30-day return policy on most items. Products must be returned in original, unused condition in original packaging. Custom or personalized orders are non-refundable.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', color: '#333' }}>9. Contact Information</h2>
          <p>If you have any questions about these Terms & Conditions, please contact us at servicemail@yoursitename.com or call 888-201-8899.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;