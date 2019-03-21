import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import ShowCase from '../common/ShowCase';

class NavBar extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
    M.Modal.init(this.props.modal);
  }

  render() {
    return (
      <>
        <header className="main-header">
          <nav className="transparent">
            <div className="container">
              <div className="nav-wrapper">
                <Link to="/cloudhosting" className="brand-logo">
                  CloudHosting
                </Link>
                <a
                  href="#!"
                  data-target="mobile-nav"
                  className="left button-collapse sidenav-trigger hide-on-large-only"
                >
                  <i className="fa fa-bars" />
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link className="active-link" to="/cloudhosting">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/cloudhosting/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link to="/cloudhosting/signup">Sign Up</Link>
                  </li>
                  <li>
                    <a href="#!" className="btn purple">
                      Login
                    </a>
                  </li>
                  <li>
                    <Link to="//facebook.com" target="_blank">
                      <i className="fab fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="//twitter.com" target="_blank">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="//instagram.com" target="_blank">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <ShowCase />
        </header>
        <ul
          className="sidenav"
          id="mobile-nav"
          ref={sidenav => (this.sidenav = sidenav)}
        >
          <h4 className="purple-text text-darken-4 center">CloudHosting</h4>
          <li>
            <div className="divider" />
          </li>
          <li>
            <Link to="/cloudhosting">
              <i className="fa-fa-home grey-text text-darken-4" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/cloudhosting/solutions">
              <i className="fa-fa-cog grey-text text-darken-4" />
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/cloudhosting/signup">
              <i className="fa-fa-users grey-text text-darken-4" />
              Sign Up
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a href="#!" className="btn purple">
              Login
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default NavBar;
