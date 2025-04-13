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
            <section className="services-section">
  <h5 className="section-title">~ OUR SERVICES ~</h5>
  <div className="services-container">
    {/* Porter Enterprise Card */}
    <div className="service-box gradient-purple">
      <span className="service-tag">Porter Enterprise</span>
      <h3>Streamlining operations to drive business growth</h3>
      <button className="service-btn">→</button>
    </div>

    {/* API Integration Card */}
    <div className="service-box gradient-green">
      <span className="service-tag">API Integration</span>
      <h3>Automate the transportation of your goods by integrating our APIs</h3>
      <button className="service-btn">→</button>
    </div>

    {/* Two-Wheelers Card */}
    <div className="service-box gradient-red">
      <span className="service-tag">Two-Wheelers</span>
      <h3>Reliable goods transportation services for up to 20 kg</h3>
      <button className="service-btn">→</button>
    </div>

    {/* Trucks Card */}
    <div className="service-box gradient-blue">
      <span className="service-tag">Trucks</span>
      <h3>Hassle-free goods transportation up to 2500 kg</h3>
      <button className="service-btn">→</button>
    </div>

{/* packers & Movers*/}
<div className="service-box gradient-blue">
      <span className="service-tag">Packers & Movers</span>
      <h3>Hassle-free goods transportation up to 2500 kg</h3>
      <button className="service-btn">→</button>
    </div>

    {/*Intercity Courier Service */}
    <div className="service-box gradient-blue">
      <span className="service-tag">Intercity Courier Service
      </span>
      <h3>Reliable Intercity Courier Service via Surface & Air</h3>
      <button className="service-btn">→</button>
    </div>
    
  </div>

  
</section>

<section class="growth-section">
  <h2 class="growth-title">And thanks to you, we are growing each & every day!</h2>

  <div class="growth-banner">
    🎉 <strong>Marhaba Dubai!</strong> We're <span>now live</span> & ready to take care of all your logistical needs.
  </div>

  <div class="growth-stats">
    <div class="stat-box">
      <div class="stat-number">21+</div>
      <div class="stat-label">Indian Cities</div>
    </div>
    <div class="divider"></div>
    <div class="stat-box">
      <div class="stat-number">7.5 Lakh+</div>
      <div class="stat-label">Driver Partners</div>
    </div>
    <div class="divider"></div>
    <div class="stat-box">
      <div class="stat-number">1.5+ Crore</div>
      <div class="stat-label">Customers</div>
    </div>
  </div>
</section>


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
