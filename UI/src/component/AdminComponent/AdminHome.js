import './AdminHome.css';

function AdminHome() {
  return (
    <>
      <div className="hero-section text-white py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          
          {/* LEFT CONTENT */}
          <div className="hero-text mb-5 mb-lg-0">
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image text-center">
            <img
              src="./assets/img/hero-img.svg" // Replace with your image
              alt="Home"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
            <h2>"admin home"</h2>   
            
          
        </div>
      </div>
    </>
  );
}

export default AdminHome;
