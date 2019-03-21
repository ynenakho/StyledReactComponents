import React, { Component } from 'react';

class PopularPlaces extends Component {
  render() {
    return (
      <div className="section section-popular">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="teal-text">Popular</span> Places
            </h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="images/resort1.jpg" alt="" />
                  <span className="card-title">Cancun, Mexico</span>
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium deleniti temporibus, dolores qui laborum illo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="images/resort4.jpg" alt="" />
                  <span className="card-title">The Bahamas</span>
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium deleniti temporibus, dolores qui laborum illo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="images/resort5.jpg" alt="" />
                  <span className="card-title">Nova Scotia</span>
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium deleniti temporibus, dolores qui laborum illo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularPlaces;
