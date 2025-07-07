import { useState, useEffect } from 'react';
import './About.css';

function About() {
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [date, setDate] = useState(new Date().toLocaleString());
    const [count,setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().toLocaleString());
        }, 1/1000); // Update every second

        return () => clearInterval(interval); // Cleanup function
    }, []);

    const increment= ()=>{
        setCount(count+1)
    }
    const decrement= ()=>{
        setCount(count-1);
        }

        //Syntax - 1
       /*  useEffect(()=>{
            console.log("use effect is working");
        }); */

         //Syntax - 2
       /*  useEffect(()=>{
            console.log("use effect is working");
        },[count]); */


    return (
        <>
            {/* About Start */}
            <div className="container-fluid overflow-hidden py-5 px-lg-0">
                <div className="container about py-5 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="about-text wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
                            <h1 className="mb-5"> Welcome to our platform! We are a passionate team of developers and designers dedicated to creating high-quality, user-friendly web solutions.</h1>
                            <p className="mb-5">
                            With a strong background in technology and design, we work closely with our clients to bring their ideas to life. From custom websites and mobile applications to interactive dashboards and browser extensions – we've got it all covered!
                            </p>
                            <br /><hr /><br />
                            <p>a = {a}</p>
                            <p>b = {b}</p>
                            <p>c={a+b}</p>
                            <h1>Show current date and time: {date}</h1>
                            <br/>
                            <h1>count={count}</h1>
                            <button onClick={increment}>+</button>
                            <button onClick={decrement}>-</button>


                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default About;