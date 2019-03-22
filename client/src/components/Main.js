import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 center">
            <Link
              style={{ margin: '20px' }}
              className="btn btn-large"
              to="/travel"
            >
              Travel Web Page
            </Link>
          </div>
          <div className="col s12 center">
            <Link
              style={{ margin: '20px' }}
              className="btn btn-large"
              to="/cloudhosting"
            >
              Cloud Hosting Page
            </Link>
          </div>
          <div className="col s12 center">
            <Link
              style={{ margin: '20px' }}
              className="btn btn-large"
              to="/admin"
            >
              Admin Page
            </Link>
          </div>
          {/* <div className="col s12 center">
            <Link
              style={{ margin: '20px' }}
              className="btn btn-large"
              to="/travel"
            >
              Travel Web Page
            </Link>
          </div>
          <div className="col s12 center">
            <Link
              style={{ margin: '20px' }}
              className="btn btn-large"
              to="/travel"
            >
              Travel Web Page
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Main;
