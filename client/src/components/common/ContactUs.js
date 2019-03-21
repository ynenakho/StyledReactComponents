import React, { Component } from 'react';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('SUBMITED', this.state);
  };

  handleChange = e => {
    console.log(e);

    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="section section-contact">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel teal white-text center">
                <i className="material-icons medium">email</i>
                <h5>Contact Us For Booking</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique magnam corrupti quibusdam pariatur perferendis
                  voluptates soluta odio dolor explicabo praesentium?
                </p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Location</h4>
                </li>
                <li className="collection-item">WebSiteName Agency</li>
                <li className="collection-item">555 Beach rd, Suite 33</li>
                <li className="collection-item">Miami FL, 55555</li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5 className="center" style={{ marginBottom: '30px' }}>
                  Please fill out this form
                </h5>
                <form className="center" onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      id="phone"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className="input-field">
                    <textarea
                      className="materialize-textarea"
                      id="message"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
