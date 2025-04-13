import React from 'react';
import './Delivery.css';

function Delivery() {
  return (
    <div className="delivery-section">
      <div className="delivery-banner-container">
        <img
          src="/assets/img/deliverybanner.jpeg"
          alt="Banner"
          className="delivery-banner"
        />
        <div className="form-overlay">
          <div className="form-box">
            <h4 className="form-title">Attach Vehicle Now</h4>
            <form>
              <input type="text" className="form-input" placeholder="Name" />
              <input type="tel" className="form-input" placeholder="Mobile Number" />
              <div className="form-row">
                <select className="form-select">
                 <option>City</option>
                  <option>BANGALORE</option>
                  <option>MUMBAI</option>
                  <option>DELHI</option>
                </select>
                <select className="form-select">
                  <option>Vehicle</option>
                  <option>Bike</option>
                  <option>Mini Truck</option>
                </select>
              </div>
              <select className="form-select full-width">
                <option>Source</option>
                <option>Google Ads</option>
                <option>Referral</option>
              </select>
              <button className="form-button" type="submit">
                REGISTER
              </button>
            </form>
            <div className="playstore-cta">
              <p>
                <strong>Start Earning Immediately</strong>
                <br />
                Download the partner app and register
              </p>
              <img
                src="/assets/img/playstore.png"
                alt="Get it on Google Play"
                className="playstore-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
