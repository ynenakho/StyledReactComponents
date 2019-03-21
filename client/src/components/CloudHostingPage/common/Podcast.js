import React, { Component } from 'react';

class Podcast extends Component {
  render() {
    return (
      <div className="section section-podcast white-text">
        <div className="primary-overlay valign-wrapper">
          <div className="container">
            <div className="row">
              <div className="col s12  m8">
                <h4>Listen to the CloudHosting Podcast</h4>
                <p>Every Thursday at 5pm EST</p>
              </div>
              <div className="col s12 m4">
                <a href="#!" className="btn btn-large purple">
                  <i className="fa fa-podcast" /> Listen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Podcast;
