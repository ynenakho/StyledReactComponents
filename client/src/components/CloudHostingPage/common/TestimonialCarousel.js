import React, { Component } from 'react';
import M from 'materialize-css';

class TestimonialCarousel extends Component {
  componentDidMount() {
    M.Carousel.init(this.carousel, {
      fullWidth: true
    });
  }
  render() {
    return (
      <div className="section section-testimonial grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div
                className="carousel carousel-slider center"
                ref={carousel => (this.carousel = carousel)}
              >
                <div className="carousel-item" href="#one!">
                  <h2>Testimonial 1</h2>
                  <p className="flow-text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis placeat magni delectus rem odio, cupiditate omnis
                    dolores, illo error ea itaque nostrum? Eos, adipisci quae
                    aperiam dignissimos aspernatur magnam odit!"
                    <br />
                    <br />
                    <em>- John Doe From Microsystems</em>
                  </p>
                  <div className="carousel-fixed-item center hide-on-small-and-down">
                    <a href="#!" className="btn grey">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="carousel-item" href="#two!">
                  <h2>Testimonial 2</h2>
                  <p className="flow-text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis placeat magni delectus rem odio, cupiditate omnis
                    dolores, illo error ea itaque nostrum? Eos, adipisci quae
                    aperiam dignissimos aspernatur magnam odit!"
                    <br />
                    <br />
                    <em>- Mike Smith From Edge INC</em>
                  </p>
                  <div className="carousel-fixed-item center hide-on-small-and-down">
                    <a href="#!" className="btn grey">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="carousel-item" href="#three!">
                  <h2>Testimonial 3</h2>
                  <p className="flow-text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis placeat magni delectus rem odio, cupiditate omnis
                    dolores, illo error ea itaque nostrum? Eos, adipisci quae
                    aperiam dignissimos aspernatur magnam odit!"
                    <br />
                    <br />
                    <em>- Karen Williams From Techsoft</em>
                  </p>
                  <div className="carousel-fixed-item center hide-on-small-and-down">
                    <a href="#!" className="btn grey">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialCarousel;
