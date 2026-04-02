import React from 'react';

const AlsoViewed = () => {
  return (
    <div className="also-viewed">
      <h3>Customers Who Viewed This Item Also Viewed</h3>
      <div className="also-viewed-slider">
        <button className="slider-arrow">‹</button>
        <div className="also-viewed-items">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="also-viewed-item">
              <img src="/images/product-small.png" className="img-fluid" alt="Product" />
              <div className="av-info">
                <div className="av-price">$2,549.15</div>
                <div className="av-name">Bosch 22 Cu. Ft Refrigerator</div>
                <div className="av-sku">B22CS30SNS5</div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow">›</button>
      </div>
    </div>
  );
};

export default AlsoViewed;