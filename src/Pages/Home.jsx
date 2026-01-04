import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <h1>Build Your Future With Us</h1>
          <p>We provide the tools and strategy you need to scale your business to the next level.</p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/services" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid-3">
            <div className="card feature-card">
              <h3>Fast Performance</h3>
              <p>Optimized for speed and efficiency to ensure your users never wait.</p>
            </div>
            <div className="card feature-card">
              <h3>Secure Data</h3>
              <p>Enterprise-grade security to keep your business data safe.</p>
            </div>
            <div className="card feature-card">
              <h3>24/7 Support</h3>
              <p>Our dedicated team is here to help you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to transform your business?</h2>
          <Link to="/contact" className="btn btn-white">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;