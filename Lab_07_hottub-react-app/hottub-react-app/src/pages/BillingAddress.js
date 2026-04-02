import React from 'react';

const BillingAddress = () => (
  <div className="container">
    <div className="content-wrap">
      <h1>Edit Billing Address</h1>
      <div className="form-section" style={{maxWidth: '520px'}}>
        <div className="form-row"><label>First Name*</label><input type="text" defaultValue="Farrukh" /></div>
        <div className="form-row"><label>Last Name*</label><input type="text" defaultValue="Javaid" /></div>
        <div className="form-row"><label>Address*</label><input type="text" defaultValue="Plot 10 Tech Society" /></div>
        <button className="btn-red">SAVE ADDRESS</button>
      </div>
    </div>
  </div>
);

export default BillingAddress;