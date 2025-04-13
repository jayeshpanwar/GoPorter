import './Test.css'; // 

function Test(props) {
  return (
    <>
      <div id="Main">
        {/* About Start */}
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container about py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div className="about-text wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
                <h1 className="mb-5">Welcome to Test section</h1>

                <p>a = {props.a}</p>
                <p>b = {props.b}</p>

                <hr />
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </div>
    </>
  );
}

export default Test;
