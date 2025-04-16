import "./Register.css";
import React, { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../../Apiurl";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    mobile: "",
    address: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, password, gender, mobile, address, city } = formData;

    if (!name || !/^[A-Za-z ]+$/.test(name)) {
      newErrors.name = "Enter a valid name (alphabets only)";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!address) {
      newErrors.address = "Address is required";
    }

    if (!city) {
      newErrors.city = "Please select a city";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    axios.post(__userapiurl + "save", formData)
      .then(() => {
        setOutput("✅ Registered Successfully 👍");
        setFormData({
          name: "", email: "", password: "", gender: "", mobile: "", address: "", city: ""
        });
        setErrors({});
      })
      .catch((error) => {
        console.error(error);
        setOutput("❌ Something went wrong");
      });
  };

  return (
    <>
      <div id="Main">
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container about py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div className="about-text wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
                <h1 className="mb-3">Register Here !!</h1>
                <p className="text-danger">{output}</p>

                <form>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.name}</small>
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.email}</small>
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.password}</small>
                  </div>
                  <br />

                  <div className="form-group">
  <label>Gender:</label><br />
  <div className="form-check form-check-inline">
    <input
      type="radio"
      className="form-check-input"
      name="gender"
      value="Male"
      checked={formData.gender === "Male"}
      onChange={handleChange}
    />
    <label className="form-check-label" style={{ color: "black" }}>Male</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      type="radio"
      className="form-check-input"
      name="gender"
      value="Female"
      checked={formData.gender === "Female"}
      onChange={handleChange}
    />
    <label className="form-check-label" style={{ color: "black" }}>Female</label>
  </div>
  <br />
  <small className="text-danger">{errors.gender}</small>
</div>

                  <br />

                  <div className="form-group">
                    <label>Mobile:</label>
                    <input
                      type="number"
                      className="form-control"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.mobile}</small>
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter your address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.address}</small>
                  </div>
                  <br />

                  <div className="form-group">
                    <label>City:</label>
                    <select
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    >
                      <option value="">Select a City</option>
                      <option value="Indore">Indore</option>
                      <option value="Ujjain">Ujjain</option>
                      <option value="Bhopal">Bhopal</option>
                    </select>
                    <small className="text-danger">{errors.city}</small>
                  </div>
                  <br />

                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
