import React, { useState } from 'react';

function Estimate() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);

  const calculateEstimate = () => {
    if (pickup.trim() === '' || drop.trim() === '') {
      alert('Please enter both pickup and drop locations.');
      return;
    }

    // Fake logic to simulate distance (you can replace this with real logic later)
    const wordsInPickup = pickup.trim().split(' ').length;
    const wordsInDrop = drop.trim().split(' ').length;
    const fakeDistance = (wordsInPickup + wordsInDrop) * 2 + Math.floor(Math.random() * 5);
    const ratePerKm = 15;

    setDistance(fakeDistance);
    setPrice(fakeDistance * ratePerKm);
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Delivery Estimate</h2>

      <div className="mb-3">
        <label htmlFor="pickup" className="form-label">Pickup Location</label>
        <input
          type="text"
          id="pickup"
          className="form-control"
          placeholder="e.g. Andheri East"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="drop" className="form-label">Drop Location</label>
        <input
          type="text"
          id="drop"
          className="form-control"
          placeholder="e.g. Bandra West"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={calculateEstimate}>
        Get Estimate
      </button>

      {distance && price && (
        <div className="mt-4 bg-light p-3 rounded">
          <h5>Estimated Distance: {distance} km</h5>
          <h5>Estimated Price: ₹{price}</h5>
        </div>
      )}
    </div>
  );
}

export default Estimate;
