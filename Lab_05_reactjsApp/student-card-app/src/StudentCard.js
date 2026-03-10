import React from 'react';

const StudentCard = ({ name, rollNo, department, university, color }) => {
  const cardStyle = {
    backgroundColor: color || '#f0f0f0', 
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    width: '250px',
    boxShadow: '2px 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0 }}>{name}</h2>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>Dept:</strong> {department}</p>
      <p><strong>University:</strong> {university}</p>
    </div>
  );
};

export default StudentCard;