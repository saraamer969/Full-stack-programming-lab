import React from 'react';

const ShippingAddress = () => (
  <div className="container">
    <div className="breadcrumb">Home › My Account › Edit Shipping Address</div>
    <div className="content-wrap">
      <h1>Edit Shipping Address</h1>
      <div className="form-section" style={{maxWidth:'500px'}}>
        <div className="form-row"><label>First Name *</label><input type="text" defaultValue="Farrukh" /></div>
        <div className="form-row"><label>Last Name *</label><input type="text" defaultValue="Javaid" /></div>
        <div className="form-row"><label>Address *</label><input type="text" defaultValue="Plot 10 Tech Society" /></div>
        <div className="form-row"><label>City *</label><input type="text" defaultValue="California" /></div>
        <button className="btn-red" style={{marginTop:'20px'}}>SAVE ADDRESS</button>
      </div>
    </div>
  </div>
);

export default ShippingAddress;