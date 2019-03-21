import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowCase extends Component {
  render() {
    return (
      <div className="showcase container">
        <div className="row">
          <div className="col s12 m10 offset-m1 center">
            <h5>Welcome to CloudHosting</h5>
            <h1>Bulid For Future</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloribus vero eum eveniet magni culpa.
            </p>
            <br />
            <br />
            <Link
              to="/cloudhosting/solutions"
              className="btn btn-large white purple-text"
            >
              Learn More
            </Link>
            <Link
              to="/cloudhosting/signup"
              className="btn btn-large purple white-text"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCase;
