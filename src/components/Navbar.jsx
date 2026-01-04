import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">StartUp<span>X</span></Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink 
          to="/" 
          onClick={() => setIsOpen(false)}
          style={({isActive}) => ({
            color: isActive ? '#2563eb' : '#334155'
          })}
          >Home</NavLink>
          <NavLink 
          to="/services" 
          onClick={() => setIsOpen(false)}
          style={({isActive}) => ({
            color: isActive ? '#2563eb' : '#334155'
          })}
          >Services</NavLink>
          <NavLink 
          to="/pricing" 
          onClick={() => setIsOpen(false)}
          style={({isActive}) => ({
            color: isActive ? '#2563eb' : '#334155'
          })}
          >Pricing</NavLink>
          <NavLink 
          to="/about" 
          onClick={() => setIsOpen(false)}
          style={({isActive}) => ({
            color: isActive ? '#2563eb' : '#334155'
          })}
          >About</NavLink>
          <NavLink 
          to="/blog" 
          onClick={() => setIsOpen(false)}
          style={({isActive}) => ({
            color: isActive ? '#2563eb' : '#334155'
          })}
          >Blog</NavLink>
          <NavLink 
          to="/contact" 
          className="btn-nav" 
          onClick={() => setIsOpen(false)}
          style={({isActive}) => ({
            color: isActive ? '#2563eb' : '#334155'
          })}
          >Contact</NavLink>
        </div>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;