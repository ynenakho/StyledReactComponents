import React, { Component } from 'react';
import ImageSlider from '../common/ImageSlider';
import SearchBar from '../common/SearchBar';
import IconBoxes from '../common/IconBoxes';
import PopularPlaces from '../common/PopularPlaces';
import ContactForBookingButton from '../common/ContactForBookingButton';
import FollowSection from '../common/FollowSection';
import PictureGallery from '../common/PictureGallery';
import ContactUs from '../common/ContactUs';

class Landing extends Component {
  render() {
    return (
      <>
        <ImageSlider />
        <SearchBar />
        <IconBoxes />
        <PopularPlaces />
        <ContactForBookingButton />
        <FollowSection />
        <PictureGallery />
        <ContactUs />
      </>
    );
  }
}

export default Landing;
