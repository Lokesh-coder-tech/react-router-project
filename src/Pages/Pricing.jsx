import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="page pricing-page">
      <header className="page-header center">
        <div className="container">
          <h1>Simple Pricing</h1>
          <p>Choose the plan that fits your needs.</p>
          
          <div className="pricing-toggle">
            <span className={!isYearly ? "active" : ""}>Monthly</span>
            <div className="toggle-switch" onClick={() => setIsYearly(!isYearly)}>
              <div className={`switch-circle ${isYearly ? "move" : ""}`}></div>
            </div>
            <span className={isYearly ? "active" : ""}>Yearly</span>
          </div>
        </div>
      </header>

      <section className="section container">
        <div className="grid-3 pricing-grid">
          {/* Basic Plan */}
          <div className="card pricing-card">
            <h3>Basic</h3>
            <p className="price">${isYearly ? "290" : "29"}<span>/{isYearly ? "yr" : "mo"}</span></p>
            <ul className="features-list">
              <li>5 Projects</li>
              <li>Basic Analytics</li>
              <li>Email Support</li>
            </ul>
            <button className="btn btn-outline">Choose Basic</button>
          </div>

          {/* Standard Plan */}
          <div className="card pricing-card popular">
            <div className="badge">Most Popular</div>
            <h3>Standard</h3>
            <p className="price">${isYearly ? "590" : "59"}<span>/{isYearly ? "yr" : "mo"}</span></p>
            <ul className="features-list">
              <li>15 Projects</li>
              <li>Advanced Analytics</li>
              <li>Priority Support</li>
              <li>Team Access</li>
            </ul>
            <button className="btn btn-primary">Choose Standard</button>
          </div>

          {/* Premium Plan */}
          <div className="card pricing-card">
            <h3>Premium</h3>
            <p className="price">${isYearly ? "990" : "99"}<span>/{isYearly ? "yr" : "mo"}</span></p>
            <ul className="features-list">
              <li>Unlimited Projects</li>
              <li>Custom Reporting</li>
              <li>24/7 Dedicated Support</li>
              <li>White Labeling</li>
            </ul>
            <button className="btn btn-outline">Choose Premium</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;