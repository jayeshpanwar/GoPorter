import React, { useState, useEffect } from 'react';
import './EpAdmin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { __userapiurl } from '../../Apiurl';

function EpAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [output, setOutput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(__userapiurl + "fetch?email=" + localStorage.getItem("email"))
      .then((response) => {
        const user = response.data[0]; // assuming only one record returned
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setGender(user.gender);
        setMobile(user.mobile);
        setAddress(user.address);
        setCity(user.city);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      name,
      email,
      password,
      gender,
      mobile,
      address,
      city,
    };

    axios.put(__userapiurl + "update", updatedUser)
      .then((response) => {
        setOutput("Profile updated successfully!");
        // Optionally navigate somewhere
        // navigate('/dashboard');
      })
      .catch((error) => {
        setOutput("Something went wrong.");
        console.error("Error updating profile:", error);
      });
  };

  return (
    <>
      <div className="hero-section text-white py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div className="hero-text mb-5 mb-lg-0">
            <h2>Edit Admin Profile</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control mb-2" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control mb-2" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control mb-2" />
              <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" className="form-control mb-2" />
              <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" className="form-control mb-2" />
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="form-control mb-2" />
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="form-control mb-2" />
              <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
            {output && <p className="mt-3">{output}</p>}
          </div>

          <div className="hero-image text-center">
            <img
              src="/assets/img/assets/img/hero-img.svg"
              alt="Home"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EpAdmin;
