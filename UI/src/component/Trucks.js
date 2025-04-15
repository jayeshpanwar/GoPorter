import React, { useState } from 'react';
import CheckoutButton from './CheckoutButton'; // Ensure this component is properly defined

function Trucks() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [phone, setPhone] = useState('');
  const [estimate, setEstimate] = useState(null);

  const handleEstimate = () => {
    if (!pickup || !drop || !phone) {
      alert('Please fill all fields.');
      return;
    }

    const distance = Math.floor(Math.random() * 30) + 10;
    const ratePerKm = 25;
    setEstimate({
      distance,
      price: distance * ratePerKm,
    });
  };
 const handlePayment = () => {
 }
  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2>Truck Delivery Estimate</h2>

      <div className="mb-3">
        <label>Pickup Location</label>
        <input
          type="text"
          className="form-control"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Drop Location</label>
        <input
          type="text"
          className="form-control"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Phone Number</label>
        <input
          type="tel"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleEstimate}>
        Get Estimate
      </button>

      {estimate && (
        <div className="mt-4 bg-light p-3 rounded">
          <h5>Estimated Distance: {estimate.distance} km</h5>
          <h5>Estimated Price: ₹{estimate.price}</h5>
          <button className="btn btn-success mt-3" onClick={handlePayment}>
      Pay Now
    </button>
        
        </div>
      )}
    </div>
  );
}

export default Trucks;
