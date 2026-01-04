import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>StartUp<span>X</span></h3>
          <p>Innovating the future, one pixel at a time. We build digital experiences that matter.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/about'>About us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Socials</h4>
          <div className="social-links">
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 StartUpX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;