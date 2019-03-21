import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer deep-purple lighten-1">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About Us</h5>
              <p className="grey-text text-lighten-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo magni sapiente in fuga ratione adipisci. Id,
                provident?
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Home
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Solutions
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright deep-purple darken-1">
          <div className="container">
            CloudHosting &copy; {new Date().getFullYear()}
            <a className="grey-text text-lighten-4 right" href="#!">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
