import './Banner.css';
import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

function Banner() {
  const [bannerContent, setBannerContent] = useState(null);
  const [city, setCity] = useState('Mumbai');
  const location = useLocation();
  const navigate = useNavigate(); // For programmatic navigation


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
            <img src='porterlogo.jpg' ></img>
            <p>Manage everything from here.</p>
          </div>
        </>
      );
    } else if (role === 'user') {
      setBannerContent(
        <>
         
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
      else if (path === '/register' || path === '/two-wheeler' || path === '/trucks' || path === '/packers-movers' || path === '/intercity'|| path === '/estimate') {
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
                    src="/assets/img/backposter.jpg"
                    width="100%"
                    height="750px"
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

                        {/* White Box */}
                        <div className="big-service-card">
                          {/* City Dropdown */}

                          <div className="city-dropdown">
                            <label htmlFor="city">⚫City:</label>
                            <select id="city" value={city} onChange={handleCityChange}>
                              <option value="Mumbai">Mumbai</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Bangalore">Bangalore</option>
                              <option value="Hyderabad">Hyderabad</option>
                              <option value="Pune">Pune</option>
                              <option value="Indore">Indore</option>
                            </select>
                          </div>

                          {/* Service Boxes - All Cards are clickable now */}
                          <div className="services-row">
                            <div className="service-card-wrapper" onClick={() => navigate('/two-wheeler')}>
                              <div className="service-card">
                                <img src="/assets/img/bikes.png" alt="Two Wheelers" className="service-icon" />
                              </div>
                              <div className="service-label">Two Wheelers</div>
                            </div>

                            <div className="service-card-wrapper" onClick={() => navigate('/trucks')}>
                              <div className="service-card">
                                <img src="/assets/img/trucks.jpeg" alt="Trucks" className="service-icon" />
                              </div>
                              <div className="service-label">Trucks</div>
                            </div>

                            <div className="service-card-wrapper" onClick={() => navigate('/packers-movers')}>
                              <div className="service-card">
                                <img src="/assets/img/p.jpeg" alt="Packers & Movers" className="service-icon" />
                              </div>
                              <div className="service-label">Packers & Movers</div>
                            </div>

                            <div className="service-card-wrapper" onClick={() => navigate('/intercity')}>
                              <div className="service-card">
                                <img src="/assets/img/intercity.jpeg" alt="All India Parcel" className="service-icon" />
                              </div>
                              <div className="service-label">All India Parcel</div>
                            </div>

                            <div className="service-card-wrapper" onClick={() => navigate('/estimate')}>
                              <div className="service-card1">
                                <div className="service-card-1">
                              <pre><h5>Get  an</h5>
                              <h5>estimate</h5>
                              <h8>(takes 2 min~)</h8>
                              </pre>
                              </div>
                              </div>
                          
                            </div>


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
                <div class="map">
                <img src="/assets/img/map.webp" alt="Line" class="line" height="550px" />
                
              </div>
              <h8>We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad,
                   Jaipur, Pune, Kolkata, Surat, Chennai, Coimbatore, Indore, Nagpur, Chandigarh,
                    Lucknow, Vadodara, Ludhiana, Kochi, Nashik, Kanpur, Trivandrum and Vizag.</h8>
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
