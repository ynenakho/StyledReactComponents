import React, { Component } from 'react';
import M from 'materialize-css';

export class ImageSlider extends Component {
  componentDidMount() {
    M.Slider.init(this.slides, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
    });
  }

  render() {
    return (
      <div className="slider" ref={slides => (this.slides = slides)}>
        <ul className="slides">
          <li>
            <img src="images/resort1.jpg" alt="" />
            <div className="caption center-align">
              <h2>Take Your Dream Vocation</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, odit ipsum? Magnam perspiciatis beatae quaerat.
              </h5>
              <a href="!#" className="btn btn-large">
                Learn More
              </a>
            </div>
          </li>
          <li>
            <img src="images/resort2.jpg" alt="" />
            <div className="caption left-align">
              <h2>We Work With All Budgets</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, odit ipsum? Magnam perspiciatis beatae quaerat.
              </h5>
              <a href="!#" className="btn btn-large">
                Learn More
              </a>
            </div>
          </li>
          <li>
            <img src="images/resort3.jpg" alt="" />
            <div className="caption right-align">
              <h2>Group & Individual Getaways</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, odit ipsum? Magnam perspiciatis beatae quaerat.
              </h5>
              <a href="!#" className="btn btn-large">
                Learn More
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ImageSlider;
