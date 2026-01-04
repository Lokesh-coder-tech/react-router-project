import React from 'react';

const Contact = () => {
  return (
    <div className="page contact-page">
      <header className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you.</p>
        </div>
      </header>

      <section className="section container">
        <div className="contact-grid">
          {/* Form */}
          <form className="contact-form card">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">Send Message</button>
          </form>

          {/* Info */}
          <div className="contact-info">
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Startup Avenue,<br/>Tech City, TC 90210</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>hello@startupx.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            {/* <div className="map-placeholder">
              Google Map Placeholder
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;