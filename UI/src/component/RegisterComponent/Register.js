import "./Register.css";
import React, { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../../Apiurl";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [output,setOutput]=useState("")

  const handleSubmit = () => {
    alert("");
    const userDetail = {
      "name": name,"email": email,"password": password,"gender": gender,"mobile": mobile,
      "address": address,
      "city": city
    };

    axios.post(__userapiurl+"save", userDetail)
    .then((response)=>{
      setOutput("Regitstered Successfully👍");
      setName("");
      setAddress("");
      setEmail("");
      setCity("");
      setPassword("");
    })
    .catch((error)=>{
      console.error(error);
      setOutput("Something Went Wrong❌")
    })
     
  };

  return (
    <>
      <div id="Main">
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container about py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div className="about-text wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
                <h1 className="mb-5">Register Here !!</h1>

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
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />

            <div className="form-group">
              <label>Gender:</label><br />
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male{" "}
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              /> Female
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
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="city">City:</label>
              <select
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="">Select a City</option>
                <option value="Indore">Indore</option>
                <option value="Ujjain">Ujjain</option>
                <option value="Bhopal">Bhopal</option>
              </select>
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
