import { useState } from 'react';
import './EstimatePage.css';
function EstimatePage() {
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [estimatedDistance, setEstimatedDistance] = useState(null);
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleCalculateEstimate = () => {
    // Here, you can call an API or some function to calculate the distance and price.
    // For now, we'll use a dummy calculation.
    const distance = Math.random() * 100;  // Simulating distance in km
    const price = distance * 10;  // Assuming the price is ₹10 per km

    setEstimatedDistance(distance.toFixed(2));
    setEstimatedPrice(price.toFixed(2));
  };

  return (
    <div className="estimate-page">
      <h2>Get Delivery Estimate</h2>

      <div className="form-group">
        <label>Pickup Address:</label>
        <input
          type="text"
          value={pickupAddress}
          onChange={(e) => setPickupAddress(e.target.value)}
          placeholder="Enter pickup address"
        />
      </div>

      <div className="form-group">
        <label>Drop-off Address:</label>
        <input
          type="text"
          value={dropAddress}
          onChange={(e) => setDropAddress(e.target.value)}
          placeholder="Enter drop-off address"
        />
      </div>

      <button onClick={handleCalculateEstimate}>Get Estimate</button>

      {estimatedDistance && (
        <div className="estimate-result">
          <p>Estimated Distance: {estimatedDistance} km</p>
          <p>Estimated Price: ₹{estimatedPrice}</p>
        </div>
      )}
    </div>
  );
}

export default EstimatePage;
