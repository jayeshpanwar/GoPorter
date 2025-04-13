import React from 'react';
import './ManageUser.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { __userapiurl } from '../../Apiurl';
function ManageUser() {

  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {

    axios.get(__userapiurl + "fetch?role=user").then((response) => {
      setUserDetail(response.data);

    }).catch((error) => {
      console.log(error);

    })

  },[]);
  return (
    <>
      <div className="hero-section text-white py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">

          {/* LEFT CONTENT */}
          <div className="hero-text mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">Manage User Details </h1>
            <table className="table table-bordered">
              <tr>
                <th>Registration ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>City</th>
                <th>Info</th>
                <th>Role</th>
                <th>status</th>
                <th>Action</th>
              </tr>
              {
                userDetail.map((row) => {
                  return (
                    <tr key={row._id}>
                      <td>{row._id}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.mobile}</td>
                      <td>{row.address}</td>
                      <td>{row.city}</td>
                      <td>{row.info}</td>
                      <td>{row.role}</td>
                      <td>{row.status}</td>
                      <td>
                        {/* Add your action buttons here if needed */}
                        <button className="btn btn-sm btn-danger">Delete</button>
                      </td>
                    </tr>
                  )
                })
              }

            </table>


            {/* SEARCH BAR */}
            {/*  <div className="input-group mb-4 shadow" style={{ maxWidth: "500px" }}>
              <input type="text" className="form-control" placeholder="Enter ZIP code or City" />
              <button className="btn btn-primary">Search</button>
            </div> */}

            {/* STATS */}
            <div className="d-flex gap-4 flex-wrap mt-4">
              <div>
                <h2 className="fw-bold text-white">232</h2>
                <p className="text-white-50 mb-0">Clients</p>
              </div>
              <div>
                <h2 className="fw-bold text-white">521</h2>
                <p className="text-white-50 mb-0">Projects</p>
              </div>
              <div>
                <h2 className="fw-bold text-white">1453</h2>
                <p className="text-white-50 mb-0">Support</p>
              </div>
              <div>
                <h2 className="fw-bold text-white">32</h2>
                <p className="text-white-50 mb-0">Workers</p>
              </div>
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

          </div>
        </div>
      </div>
    </>
  );
}

export default ManageUser;
