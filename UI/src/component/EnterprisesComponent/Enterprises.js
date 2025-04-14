
import { Link } from 'react-router-dom';
import axios from "axios";
import './Enterprises.css';
import React, { useState } from "react";
import { __userapiurl } from "../../Apiurl";
import { FaUser, FaBuilding, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Enterprises() {
    const [name, setName] = useState("");
    const [companyname, setCompanyName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
      const [output,setOutput]=useState("")
 
  
    const handleSubmit = () => {
      alert("");
      const userDetail = {
        "name": name,"email": email,"mobile": mobile,
        "companyname": companyname
      };
  
      axios.post(__userapiurl+"save", userDetail)
      .then((response)=>{
        setOutput("Thank you for contacting us!!👍");
        setName("");
        setCompanyName("");
        setMobile("");
        setEmail("");
      })
      .catch((error)=>{
        console.error(error);
        setOutput("Something Went Wrong❌")
      })
       
    };
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
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <br />

           

           

            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="companyname">CompanyName</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Company Name"
                value={companyname}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <br />

            
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Register</button>
          </form>

              </div>
            </div>
          </div>
          </div>
       
   
  );
}

export default Enterprises;
