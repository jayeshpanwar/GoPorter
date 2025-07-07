import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [mks, setMks] = useState([53, 24, 59, 65, 21]);
  const [emp, setEmp] = useState({ name: "Jayesh", age: 22, dept: "CSE" });

  return (
    <>
      {/* About Start */}
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="about-text wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
              <h1 className="mb-5">Welcome to Services Section</h1>

              <h1>Show Marks List</h1>
              {
                mks.map((v, i) => (
                  <p key={i}>{i} ---- {v}</p>
                ))
              }

              <h1>Show Emp Detail</h1>
              {
                Object.keys(emp).map((key) => (
                  <p key={key}>{key} ------ {emp[key]}</p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
}

export default Services;
