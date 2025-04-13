import React from 'react';
import { Link } from 'react-router-dom';
import './Enterprises.css';
import { FaUser, FaBuilding, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Enterprises() {
  return (
    <div className="enterprise-banner-container">
      <div className="enterprise-content row mx-0">
        {/* Left Side */}
        <div className="col-md-6 text-light d-flex flex-column justify-content-center px-5 py-4">
          <Link to="/">
            <div className="logo"> {/* Your logo here */} </div>
          </Link>
          <div className="badge bg-secondary text-uppercase mb-3 px-3 py-2 w-fit">
            Porter Enterprise
          </div>
          <h1 className="fw-bold mb-3">Reliable Goods Transportation Services with Seamless Control</h1>
          <p className="text-warning fw-semibold">
            Hassle-Free Enterprise Logistics &nbsp; | &nbsp;
            Centralised Management &nbsp; | &nbsp;
            Transparent Operations & Full Control
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center px-5 py-4">
          <div className="enterprise-form p-4 bg-white rounded-4 shadow-lg w-100" style={{ maxWidth: '400px' }}>
            <h5 className="text-center fw-bold mb-4">Fill Out For More Details</h5>
            <form>
              <div className="input-group mb-3">
                <span className="input-group-text bg-light"><FaUser /></span>
                <input type="text" className="form-control" placeholder="Enter your Name*" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text bg-light"><FaBuilding /></span>
                <input type="text" className="form-control" placeholder="Enter your Company Name*" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text bg-light"><FaPhoneAlt /></span>
                <input type="text" className="form-control" placeholder="Enter your Phone Number*" />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text bg-light"><FaEnvelope /></span>
                <input type="email" className="form-control" placeholder="Enter your Email ID" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Get in Touch</button>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Enterprises;
