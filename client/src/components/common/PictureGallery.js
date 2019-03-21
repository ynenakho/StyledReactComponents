import React, { Component } from 'react';

class PictureGallery extends Component {
  render() {
    return (
      <div className="section picture-gallery-section">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Photo</span> Gallery
          </h4>
          <div className="row">
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://source.unsplash.com/1600x900/?beach"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://source.unsplash.com/1600x900/?nature"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://source.unsplash.com/1600x900/?travel"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://source.unsplash.com/1600x900/?mountains"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://source.unsplash.com/1600x900/?water"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://source.unsplash.com/1600x900/?beaches"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://source.unsplash.com/1600x900/?maountain"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://source.unsplash.com/1600x900/?boat,travel"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PictureGallery;
