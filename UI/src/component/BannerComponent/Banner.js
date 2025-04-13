import './Banner.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Banner() {
  const [bannerContent, setBannerContent] = useState(null);
  const [city, setCity] = useState('Mumbai');
  const location = useLocation();

  const handleCityChange = (e) => setCity(e.target.value);

  useEffect(() => {
    const role = localStorage.getItem('role');
    const path = location.pathname;

    // Logged-in user banners
    if (role === 'admin') {
      setBannerContent(
        <>
          <img src="/assets/img/admin-banner.jpg" width="100%" height="500px" alt="Admin Banner" />
          <div className="carousel-caption">
            <h1>Welcome Admin!</h1>
            <p>Manage everything from here.</p>
          </div>
        </>
      );
    } else if (role === 'user') {
      setBannerContent(
        <>
          <img src="/assets/img/user-banner.jpg" width="100%" height="500px" alt="User Banner" />
          <div className="carousel-caption">
            <h1>Hello User!</h1>
            <p>Fast & Reliable Deliveries at your doorstep.</p>
          </div>
        </>
      );


    }

    // Not logged in: Show banners based on path
    else {
      if (path === '/enterprises') {
        setBannerContent(
          <>

          </>
        );
      } else if (path === '/delivery') {
        setBannerContent(
          <>
           
          </>
        );
      }
      else if (path === '/services') {
        setBannerContent(
          <>
           
          </>
        );
      }
      else if (path === '/login') {
        setBannerContent(
          <>
           
          </>
        );
      }
      else if (path === '/register') {
        setBannerContent(
          <>
           
          </>
        );
        
      }
      
      else {
        // Default home banner
        setBannerContent(
          <>
            <div id="Main">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/assets/img/poster.webp"
                    width="100%"
                    height="500px"
                    alt="Banner"
                  />
                  <div className="carousel-caption d-flex align-items-center justify-content-start">
                    <div className="container">
                      <div className="row">
                        {/* LEFT TEXT CONTENT */}
                        <div className="banner-text text-start">
                          <h1>Delivery hai?</h1>
                          <h1 className="fw-bold display-4 text-uppercase">#HoJayega!</h1>
                        </div>

                        {/* CITY DROPDOWN */}
                        <div className="city-dropdown">
                          <label htmlFor="city">Select City:</label>
                          <select id="city" value={city} onChange={handleCityChange}>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Pune">Pune</option>
                            <option value="Indore">Indore</option>
                          </select>
                        </div>

                        {/* SERVICE CARDS */}
                        <div className="big-service-card">
                          <div className="service-card">
                            <img src="/assets/img/bikes.png" alt="Two Wheelers" className="service-icon" />
                            <h4>Two Wheelers</h4>
                          </div>
                          <div className="service-card">
                            <img src="/assets/icons/truck-icon.png" alt="Trucks" className="service-icon" />
                            <h4>Trucks</h4>
                          </div>
                          <div className="service-card">
                            <img src="/assets/icons/packers-movers-icon.png" alt="Packers & Movers" className="service-icon" />
                            <h4>Packers & Movers</h4>
                          </div>
                          <div className="service-card">
                            <img src="/assets/icons/parcel-icon.png" alt="All India Parcel" className="service-icon" />
                            <h4>All India Parcel</h4>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </>
        );
      }
    }
  }, [location]);

  return (
    <div id="Main">
      <div className="carousel-inner">
        <div className="carousel-item active">
          {bannerContent}

          {/* City Dropdown visible always */}

        </div>
      </div>
    </div>
  );
}

export default Banner;
