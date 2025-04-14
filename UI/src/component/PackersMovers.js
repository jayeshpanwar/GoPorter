import React, { useState } from 'react';

function PackersMovers() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [phone, setPhone] = useState('');
  const [shiftingDate, setShiftingDate] = useState('');
  const [estimate, setEstimate] = useState(null);

  const handleEstimate = () => {
    if (!pickup || !drop || !phone || !shiftingDate) {
      alert('Please fill all fields.');
      return;
    }

    const distance = Math.floor(Math.random() * 50) + 15;
    const ratePerKm = 30;
    setEstimate({
      distance,
      price: distance * ratePerKm,
    });
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2>Packers & Movers Estimate</h2>

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

      <div className="mb-3">
        <label>Shifting Date</label>
        <input
          type="date"
          className="form-control"
          value={shiftingDate}
          onChange={(e) => setShiftingDate(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleEstimate}>
        Get Estimate
      </button>

      {estimate && (
        <div className="mt-4 bg-light p-3 rounded">
          <h5>Estimated Distance: {estimate.distance} km</h5>
          <h5>Estimated Price: ₹{estimate.price}</h5>
        </div>
      )}
    </div>
  );
}

export default PackersMovers;
