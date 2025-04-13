import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../../Apiurl";
import {useNavigate} from "react-router-dom"

function Login() {
  // ✅ useState hooks must be inside the component
  const [email, setEmail] = useState("");
  const [output, setOutput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (email === "") {
      setOutput("Email is Required");
    } else if (password === "") {
      setOutput("Password is Required");
    } else {
      const userDetail = { email: email, password: password };

      axios.post(__userapiurl + "login", userDetail)  .then((res) => {
        var user=res.data.userList;
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("__id",user._id);
        localStorage.setItem("name",user.name);
        localStorage.setItem("email",user.email);
        localStorage.setItem("password",user.password);
        localStorage.setItem("mobile",user.mobile);
        localStorage.setItem("address",user.address);
        localStorage.setItem("gender",user.gender);
        localStorage.setItem("role",user.role);
        localStorage.setItem("status",user.status);
        localStorage.setItem("info",user.info);
        (user.role=="admin")?navigate("/admin"):navigate("/user")
        setOutput("login as user")
        })
        .catch((err) => {
          setOutput("Invalid email or password");
          console.error(err);
        });
    }
  };

  return (
    <>
      <div id="Login">
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container about py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div className="about-text wow fadeInUp" data-wow-delay="0.3s">
                <h1 className="mb-5">Welcome to login section</h1>
              

                {output && <div className="alert alert-info">{output}</div>}

                <form onSubmit={handleSubmit}>
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

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
