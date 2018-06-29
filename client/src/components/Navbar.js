import React from 'react';

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-3">
      <div className="container">
        <button
          className="navbar-toggler m-auto"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link px-3">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">Music</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">Socials/Streams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
