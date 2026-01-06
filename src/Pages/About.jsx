import React from 'react';

const About = () => {
  return (
    <div className="page about-page">
      <header className="page-header">
        <div className="container">
          <h1>Who We Are</h1>
          <p>Driving innovation through passion and expertise.</p>
        </div>
      </header>

      <section className="section container">
        <div className="about-content">
          <div className="text-block">
            <h2>Our Story</h2>
            <p>Founded in 2020, StartUpX began with a simple mission: to make technology accessible and impactful for everyone. What started as a small team in a garage has grown into a global agency helping hundreds of clients succeed.</p>
          </div>
          <div className="image-placeholder"></div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <h3>Our Mission</h3>
              <p>To empower businesses with cutting-edge digital solutions that drive real growth.</p>
            </div>
            <div className="card">
              <h3>Our Vision</h3>
              <p>To be the world's most customer-centric technology partner.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Meet The Team</h2>
        <div className="grid-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card team-card">
              <div className="avatar"></div>
              <h4>John Doe</h4>
              <p>Co-Founder</p>
              {/* <h4>John Doe</h4>
              <p>Co-Founder</p> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;