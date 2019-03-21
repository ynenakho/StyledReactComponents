import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FollowSection extends Component {
  render() {
    return (
      <div className="section section-follow teal darken-2 white-text center">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4>Follow WebSiteName</h4>
              <p>Follow us on social media for special offers</p>
              <Link to="//facebook.com" target="_blank" className="white-text">
                <i className="fab fa-facebook fa-4x" />
              </Link>
              <Link to="//twitter.com" target="_blank" className="white-text">
                <i className="fab fa-twitter fa-4x" />
              </Link>
              <Link to="//linkedin.com" target="_blank" className="white-text">
                <i className="fab fa-linkedin fa-4x" />
              </Link>
              <Link
                to="//googleplus.com"
                target="_blank"
                className="white-text"
              >
                <i className="fab fa-google-plus fa-4x" />
              </Link>
              <Link to="//pinterest.com" target="_blank" className="white-text">
                <i className="fab fa-pinterest fa-4x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowSection;
