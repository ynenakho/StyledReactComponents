import React, { Component } from 'react';

class Languages extends Component {
  render() {
    return (
      <div className="section section-language grey lighten-4">
        <div className="container">
          <div className="row">
            <h4 className="center">
              Work With{' '}
              <span className="deep-purple-text text-darken-1">
                Any Language
              </span>
            </h4>
            <br />
            <br />
            <div className="row">
              <div className="col s2">
                <img
                  src="cloud-hosting-img/python-logo.png"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="col s2">
                <img
                  src="cloud-hosting-img/ruby-logo.png"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="col s2">
                <img
                  src="cloud-hosting-img/php-logo.png"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="col s2">
                <img
                  src="cloud-hosting-img/node-logo.png"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="col s2">
                <img
                  src="cloud-hosting-img/c-sharp-logo.png"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="col s2">
                <img
                  src="cloud-hosting-img/java-logo.png"
                  alt=""
                  className="responsive-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
