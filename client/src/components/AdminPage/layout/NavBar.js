import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class NavBar extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
    M.Modal.init(this.props.modal);
  }

  render() {
    return (
      <>
        <nav className="blue darken-2">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/admin" className="brand-logo">
                AdminPage
              </Link>
              <a
                href="#!"
                data-target="mobile-nav"
                className="button-collapse sidenav-trigger show-on-large right"
              >
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/admin">Dashboard</Link>
                </li>
                <li>
                  <Link to="/admin/posts">Posts</Link>
                </li>
                <li>
                  <Link to="/admin/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/admin/comments">Comments</Link>
                </li>
                <li>
                  <Link to="/admin/users">Users</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul
          className="sidenav"
          id="mobile-nav"
          ref={sidenav => (this.sidenav = sidenav)}
        >
          <li>
            <div className="user-view">
              <div className="background">
                <img src="admin-img/ocean.jpg" alt="" />
              </div>
              <a href="#!">
                <img src="admin-img/person1.jpg" className="circle" alt="" />
              </a>
              <a href="#!">
                <span className="name white-text">John Doe</span>
              </a>
              <a href="#!">
                <span className="email white-text">jdoe@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <Link to="/admin">
              <i className="material-icons">dashboard</i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/posts">Posts</Link>
          </li>
          <li>
            <Link to="/admin/categories">Categories</Link>
          </li>
          <li>
            <Link to="/admin/comments">Comments</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a href="#!" className="subheader">
              Account Controls
            </a>
          </li>
          <li>
            <a href="admin/login" className="waves-effect">
              Logout
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default NavBar;
