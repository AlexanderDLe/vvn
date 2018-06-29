import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-3">
      <div className="container">
        <button
          className="navbar-toggler m-auto text-light"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link cinzel text-light px-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link cinzel text-light px-3">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/music" className="nav-link cinzel text-light px-3">
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/socials-streams"
                className="nav-link cinzel text-light px-3"
              >
                Socials/Streams
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link cinzel text-light px-3">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link cinzel text-light px-3">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
