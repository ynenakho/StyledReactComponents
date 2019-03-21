import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class NavBar extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }

  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="teal">
            <div className="container">
              <div className="nav-wrapper">
                <Link className="brand-logo" to="/">
                  WebsiteName
                </Link>
                <a
                  href="!#"
                  data-target="mobile-nav"
                  className="left button-collapse sidenav-trigger hide-on-large-only"
                >
                  <i className="material-icons large">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Search</Link>
                  </li>
                  <li>
                    <Link to="/">Popular Places</Link>
                  </li>
                  <li>
                    <Link to="/">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul
          className="sidenav"
          id="mobile-nav"
          ref={sidenav => (this.sidenav = sidenav)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/">Popular Places</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default NavBar;
