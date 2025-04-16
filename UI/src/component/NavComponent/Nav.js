import './Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Nav() {
  const [navContent, setNavContent] = useState();

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem('role') == "admin") {
        setNavContent(
          <>
            <div id='Nav'>
              {/* Navbar Start */}

              <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
                <a className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5" href="#">
                  <h2 className="mb-2 text-white">Welcome to Adminpanel</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto p-4 p-lg-0">

                    <Link className="nav-item nav-link" to="/admin">AdminHome</Link> {/* //about */}
                    <Link className="nav-item nav-link" to="/manageuser">ManageUser</Link>




                    <Link className="nav-item nav-link active" to="/"></Link>
                    {/*   <Link className="nav-item nav-link" to="/services">For Delivery</Link> */}
                    <div className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Profile Setting</a>
                      <div className="dropdown-menu fade-up m-0">
                        <Link className="dropdown-item" to="/epadmin">Edit Profile</Link>
                        <Link className="dropdown-item" to="/cpadmin">Change Password</Link>

                      </div>
                    </div>
                    {/* <Link className="nav-item nav-link" to="/register">Register</Link> */}
                    <Link className="nav-item nav-link" to="/logout">Logout</Link>
                  </div>

                </div>
              </nav>

              {/* Navbar End */}
            </div>
          </>
        )
      }
      else if (localStorage.getItem('role') == "user") {

        setNavContent(
          <>

            <div id='Nav'>
              {/* Navbar Start */}
              <div id='Navbar'></div>
              <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
              <Link to="/user">
                <img src="/assets/img/porter-logo.svg" height="18px" alt="Porter Logo" />
              </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link className="nav-item nav-link active" to="/user">UserHome</Link>
                 
                    <Link className="nav-item nav-link" to="/logout">Logout</Link>
             

                    
                  </div>
                  
                </div>
              </nav>

              {/* Navbar End */}
            </div>
          </>
        )

      }
      else {
        setNavContent(

          <div id='Nav'>
            {/* Navbar Start */}
            <nav className="navbar-container">
              <Link to="/">
                <img src="/assets/img/porter-logo.svg" height="18px" alt="Porter Logo" />
              </Link>



              <div className="navbar-links      ">
                <Link to="/enterprises" className="navbar-link">For Enterprise</Link>
                <Link to="/delivery" className="navbar-link">Delivery Partners</Link>
                <Link to="/services" className="navbar-link">Support</Link>
              </div>

              <div className="navbar-auth">
                <Link className="auth-link" to="/login">Login</Link>
                <Link className="auth-link" to="/register">SignUp</Link>
              </div>
            </nav>

            {/* Navbar End */}
          </div>

        );
      }

    }, 1)

  }, [])
  return (
    <>
      {
        navContent
      }
    </>
  );
}

export default Nav;
