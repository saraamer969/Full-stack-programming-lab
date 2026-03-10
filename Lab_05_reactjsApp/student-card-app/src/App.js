import React from 'react';
import StudentCard from './StudentCard';

function App() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px'
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Student Directory</h1>
      
      <div style={containerStyle}>
        {/* Displaying 3 students using the same component with different props */}
        <StudentCard 
          name="Nida Sakina" 
          rollNo="CS-101" 
          department="Computer Science" 
          university="FAST NUCES"
          color="#e3f2fd" 
        />
        
        <StudentCard 
          name="Sara Amer" 
          rollNo="SE-204" 
          department="Software Engineering" 
          university="COMSATS"
          color="#f1f8e9" 
        />
        
        <StudentCard 
          name="Fatima Arshad" 
          rollNo="IT-305" 
          department="Information Technology" 
          university="NUST"
          color="#fff3e0" 
        />
      </div>
    </div>
  );
}

export default App;