import './Banner.css';

function Banner() {
  return (
    <div id="Main">
      {/* Carousel Start */}
      <div class="container-fluid p-0">
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="./assets/img/build.jpg" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center" >
                        <div class="p-3" style={{"max-width": "900px"}}>
                            <h5 class="text-white text-uppercase mb-3 animated slideInDown">Welcome To Take Our Services</h5>
                            <h1 class="display-3 text-white animated slideInDown mb-4">Best Carpenter & Craftsman Services</h1> 
                            <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                            <a class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="./assets/img/carousel-2.jpg" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"max-width": "900px"}}>
                            <h5 class="text-white text-uppercase mb-3 animated slideInDown">Welcome To TOS</h5>
                            <h1 class="display-3 text-white animated slideInDown mb-4">Best Plumbing Services</h1>        
                            <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                            <a class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                        </div>
                    </div>
                </div>   
              <div class="carousel-item">
                    <img class="w-100" src="./assets/img/carousel-2.jpg" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"max-width": "900px"}}>
                            <h5 class="text-white text-uppercase mb-3 animated slideInDown">Welcome To TOS</h5>
                            <h1 class="display-3 text-white animated slideInDown mb-4">Best Elctrician Services</h1>        
                            <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                            <a class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                        </div>
                    </div>
                </div>   
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* Carousel End */} 
  

    </div>
  );
}

export default Banner;
