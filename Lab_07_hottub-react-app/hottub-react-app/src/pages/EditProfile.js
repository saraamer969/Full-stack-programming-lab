import React from 'react';

const EditProfile = () => (
  <div className="container">
    <div className="content-wrap">
      <h1>Edit Account Details</h1>
      <div className="form-section" style={{maxWidth: '500px'}}>
        <h3>Account Information</h3>
        <div className="form-row"><label>First Name*</label><input type="text" defaultValue="Farrukh" /></div>
        <div className="form-row"><label>Last Name*</label><input type="text" defaultValue="Javaid" /></div>
        <div className="form-row"><label>Email*</label><input type="email" defaultValue="user@example.com" /></div>
        <hr />
        <h3>Change Password</h3>
        <div className="form-row"><label>New Password</label><input type="password" /></div>
        <button className="btn-red" style={{marginTop: '20px'}}>SAVE CHANGES</button>
      </div>
    </div>
  </div>
);

export default EditProfile;