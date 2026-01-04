import React from 'react';

const Services = () => {
  const services = [
    { title: "Web Development", desc: "Custom websites tailored to your brand needs." },
    { title: "Mobile Apps", desc: "Native and cross-platform mobile solutions." },
    { title: "UI/UX Design", desc: "User-centric design that drives engagement." },
    { title: "SEO Optimization", desc: "Rank higher and reach your target audience." },
    { title: "Cloud Solutions", desc: "Scalable cloud infrastructure management." },
    { title: "Consulting", desc: "Strategic advice to grow your tech stack." },
  ];

  return (
    <div className="page services-page">
      <header className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions for the modern digital age.</p>
        </div>
      </header>

      <section className="section container">
        <div className="grid-3">
          {services.map((s, index) => (
            <div key={index} className="card service-card">
              <div className="icon-box"></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <div className="process-grid">
            <div className="step">
              <span className="step-num">01</span>
              <h4>Discovery</h4>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <h4>Strategy</h4>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <h4>Development</h4>
            </div>
            <div className="step">
              <span className="step-num">04</span>
              <h4>Launch</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;