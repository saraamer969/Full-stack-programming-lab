import React from 'react';

const Contact = () => (
  <div className="container">
    <div className="page-content">
      <h1>Contact Us</h1>
      <div className="contact-info-grid" style={{display: 'flex', gap: '40px', marginBottom: '30px'}}>
        <div className="info-box">
          <h3>Get In Touch</h3>
          <p>📍 123 Spa Street, California<br />📞 CALL 24/7: 888-201-8899</p>
        </div>
      </div>
      <h2>Send Us a Message</h2>
      <div className="form-section" style={{maxWidth: '500px'}}>
        <div className="form-row"><label>Full Name*</label><input type="text" /></div>
        <div className="form-row"><label>Email*</label><input type="email" /></div>
        <div className="form-row"><label>Message*</label><textarea style={{height: '100px'}}></textarea></div>
        <button className="btn-red">SEND MESSAGE</button>
      </div>
    </div>
  </div>
);

export default Contact;