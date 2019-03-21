import React, { Component } from 'react';
import IconBoxes from '../common/IconBoxes';
import About from '../common/About';
import Developers from '../common/Developers';
import Languages from '../common/Languages';
import Podcast from '../common/Podcast';
import TestimonialCarousel from '../common/TestimonialCarousel';
import LoginModal from '../common/LoginModal';

class Landing extends Component {
  render() {
    return (
      <>
        <IconBoxes />
        <About />
        <Developers />
        <Languages />
        <Podcast />
        <TestimonialCarousel />
        <LoginModal />
      </>
    );
  }
}

export default Landing;
