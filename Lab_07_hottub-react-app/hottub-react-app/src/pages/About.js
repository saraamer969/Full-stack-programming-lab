import React from 'react';

const About = () => (
  <div className="container">
    <div className="page-content">
      <h1>About HotSpring Portable Spas</h1>
      <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
        <p style={{flex: 1}}>HotSpring Portable Spas has been a leader in the hot tub industry for over 30 years. We are dedicated to providing our customers with the highest quality portable spas and accessories.</p>
        <img src="/images/company.png" alt="Company" style={{width: '300px'}} />
      </div>
      <h2>Our Mission</h2>
      <p>To provide exceptional quality hot tubs that enhance the lives of our customers through relaxation and therapy.</p>
    </div>
  </div>
);

export default About;