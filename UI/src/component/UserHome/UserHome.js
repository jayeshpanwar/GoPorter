import React from 'react';
import './UserHome.css';

function UserHome() {
  return (
    <>
      <div className="hero-section text-white py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          
          {/* LEFT CONTENT */}
          <div className="hero-text mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">Your Lightning Fast<br />Delivery Partner</h1>
            <p className="mb-4 text-white-50">
              Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt
              optio quis sit odio nemo quisquam. Eius quos reiciendis eum vel eum voluptatem
              eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit.
            </p>

            {/* SEARCH BAR */}
           {/*  <div className="input-group mb-4 shadow" style={{ maxWidth: "500px" }}>
              <input type="text" className="form-control" placeholder="Enter ZIP code or City" />
              <button className="btn btn-primary">Search</button>
            </div> */}

            {/* STATS */}
            
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image text-center">
            <img
              src="/assets/img/assets/img/hero-img.svg" // Replace with your image
              alt="Home"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
              
            />
            <h2>"user home"</h2>
          
        </div>
      </div>
    </>
  );
}

export default UserHome;
