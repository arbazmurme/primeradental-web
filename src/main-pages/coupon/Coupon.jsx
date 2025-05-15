import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Coupon = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          Coupon Code
        </div>
        <div className="card-body">
          <h5 className="card-title">Special Discount</h5>
          <p className="card-text">Use the code below to get a special discount on your next purchase!</p>
          <button className="btn btn-primary">Apply Coupon</button>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
