import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    if (window.innerWidth <= 991) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }
  render() {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top mb-3">
        <div className="container">
          <NavbarToggler className="m-auto" onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            className="navbar-collapse"
            id="navbarNav"
            navbar
          >
            <Nav className="navbar-nav m-auto" navbar>
              <NavItem onClick={this.toggle} className="nav-item">
                <Link to="/" className="nav-link cinzel text-light px-3">
                  Home
                </Link>
              </NavItem>
              <NavItem onClick={this.toggle} className="nav-item">
                <Link to="/about" className="nav-link cinzel text-light px-3">
                  About
                </Link>
              </NavItem>
              <NavItem onClick={this.toggle} className="nav-item">
                <Link to="/music" className="nav-link cinzel text-light px-3">
                  Music
                </Link>
              </NavItem>
              <NavItem onClick={this.toggle} className="nav-item">
                <Link
                  to="/socials-streams"
                  className="nav-link cinzel text-light px-3"
                >
                  Socials/Streams
                </Link>
              </NavItem>
              <NavItem onClick={this.toggle} className="nav-item">
                <Link
                  to="/services"
                  className="nav-link cinzel text-light px-3"
                >
                  Services
                </Link>
              </NavItem>
              <NavItem onClick={this.toggle} className="nav-item">
                <Link to="/contact" className="nav-link cinzel text-light px-3">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
