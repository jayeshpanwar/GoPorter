import './Contact.css';
import {useEffect, useState} from 'react';
import{useNavigate} from 'react-router-dom';
import Test from '../TestComponent/Test';



function Contact() {
  const navigate=useNavigate();
   const [a, setA] = useState(10);
    const [b, setB] = useState(20);

    useEffect(()=>{
      navigate("/login");
    })

  return(
    <>
    <div id="Main">
 {/* About Start */}
 <div class="container-fluid overflow-hidden py-5 px-lg-0">
        <div class="container about py-5 px-lg-0">
            <div class="row g-5 mx-lg-0">
                <div class=" about-text wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="text-secondary text-uppercase mb-3">About Us</h6>
                    <h1 class="mb-5">Welcome to Contact section</h1>
                    <p>a={a}</p>
                    <p>b={b}</p>
                    <br><hr/></br>
                    <Test a={a} b={b}/>
                    
                </div>
            </div>
        </div>
    </div>
    {/* About End */}</div>
    </>
  );
}
export default Contact;