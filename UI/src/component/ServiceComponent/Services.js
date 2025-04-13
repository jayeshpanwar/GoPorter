import React from 'react';
import './Services.css';

const supportData = [
  {
    icon: '👩‍💻',
    title: 'CUSTOMER SUPPORT',
    content: <>
      <p><a href="#">Click here</a> to read our FAQs</p>
      <p>
        For support with your bookings and other queries, email us at
        <a href="mailto:help@theporter.in"> help@theporter.in</a> or call us on
        <a href="tel:02244104410"> 022 4410 4410</a>
      </p>
    </>
  },
  {
    icon: '🚛',
    title: 'PACKERS AND MOVERS',
    content: <>
      <p>
        For queries and support regarding your house shifting booking, email us at
        <a href="mailto:packermover@theporter.in"> packermover@theporter.in</a> or call us on
        <a href="tel:02244104444"> 022 4410 4444</a> or
        <a href="tel:02262684444"> 022 6268 4444</a>
      </p>
    </>
  },
  {
    icon: '📦',
    title: 'ENTERPRISE SERVICES',
    content: <>
      <p>
        If you are an enterprise and are looking for goods transportation services for your business,
        <a href="#"> Click here</a> or mail us at
        <a href="mailto:help@theporter.in"> help@theporter.in</a>
      </p>
    </>
  },
  {
    icon: '🛵',
    title: 'DRIVE WITH PORTER',
    content: <>
      <p>
        Have a mini truck or bike? Earn money by fulfilling transportation orders assigned by Porter.
        <a href="#"> Click here</a> or reach us out on
        <a href="tel:02244104410"> 022 4410 4410</a> (add your city code)
      </p>
    </>
  },
];

const Services = () => {
  return (
    <section className="help-center">
      <h1>HELP CENTER</h1>
      <p className="subtext">
        Need assistance? We're happy to help, reach us out through the appropriate channels below.
      </p>

      <div className="help-grid">
        {supportData.map((item, index) => (
          <div className="help-box" key={index}>
            <div className="icon">{item.icon}</div>
            <h2>{item.title}</h2>
            {item.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
