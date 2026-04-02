import React from 'react';
import AlsoViewed from '../components/AlsoViewed';

const Category = () => (
  <div className="container">
    <div className="breadcrumb">Home › Category</div>
    <div className="layout-sidebar" style={{ display: 'flex', gap: '20px' }}>
      <aside className="sidebar" style={{ width: '250px', background: '#f9f9f9', padding: '15px' }}>
        <h3>Shopping Options</h3>
        <div className="filter-group">
          <h4 style={{ borderBottom: '1px solid #ccc' }}>Seating Capacity</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#c00' }}>2 - 4 PEOPLE</a></li>
            <li><a href="#">5 - 7 PEOPLE</a></li>
            <li><a href="#">8+ PEOPLE</a></li>
          </ul>
        </div>
      </aside>
      <div className="main-content" style={{ flex: 1 }}>
        <h2>Hot Tubs & Spas</h2>
        {/* Reuse Product Grid Logic Here */}
      </div>
    </div>
    <AlsoViewed />
  </div>
);

export default Category;