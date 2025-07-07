import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
    <div id='Nav'>
      {/* Navbar Start */}
      <div id='Navbar'></div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
        <a className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5" href="#">
          <h2 className="mb-2 text-white">Property Rental</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link className="nav-item nav-link active" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/about">About</Link>
            <Link className="nav-item nav-link" to="/services">Services</Link>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu fade-up m-0">
                <Link className="dropdown-item" to="/portfolio">Portfolio</Link>
                <Link className="dropdown-item" to="/testimonial">Testimonial</Link>
                <Link className="dropdown-item" to="/contact">Contact</Link>
              </div>
            </div>
            <Link className="nav-item nav-link" to="/register">Register</Link>
            <Link className="nav-item nav-link" to="/login">Login</Link>
          </div>
          <h4 className="m-0 pe-lg-5 d-none d-lg-block">
            <i className="fa fa-headphones text-primary me-3"></i>+012 345 6789
          </h4>
        </div>
      </nav>
   
      {/* Navbar End */}
      </div>
    </>
  );
}

export default Nav;
