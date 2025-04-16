import React, { useState } from 'react';

function TwoWheeler() {
  const [city, setCity] = useState('Mumbai');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [phone, setPhone] = useState('');
  const [estimate, setEstimate] = useState(null);

  const handleEstimate = () => {
    if (!pickup || !drop || !phone) {
      alert('Please fill all fields.');
      return;
    }

    const distance = Math.floor(Math.random() * 18) + 3;
    const ratePerKm = 12;
    setEstimate({
      distance,
      price: distance * ratePerKm,
    });
  };const role = "user"; // Or dynamically get this from props/context/auth

  const handleProceed = () => {
    if (role === "user") {  
    alert("Proceeding to payment...");
    } else {
      alert("Please login as user to proceed with payment");
    }
  };


  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h2>Two Wheeler Delivery Estimate</h2>

      <div className="mb-3">
        <label>City</label>
        <select className="form-select" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
          <option value="Indore">Indore</option>
        </select>
      </div>

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
          <button className="btn btn-success mt-3" onClick={handleProceed}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
}

export default TwoWheeler;
