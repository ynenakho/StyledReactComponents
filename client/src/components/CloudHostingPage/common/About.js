import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="section section-about grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h3>
                <span className="deep-purple-text text-darken-1">About</span> Us
              </h3>
              <p className="flow-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                laudantium possimus odit sequi iure, vitae sed mollitia illum ut
                dolorum.
              </p>
            </div>
            <div className="col s12 m6">
              <img
                src="cloud-hosting-img/tech.jpg"
                alt=""
                className="circle responsive-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
