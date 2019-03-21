import React, { Component } from 'react';

class ContactForBookingButton extends Component {
  render() {
    return (
      <div className="contacts">
        <div className="row">
          <div className="col s12 center">
            <button className="btn btn-large grey darken-3">
              <i className="material-icons left">send</i> Contact For Booking
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForBookingButton;
