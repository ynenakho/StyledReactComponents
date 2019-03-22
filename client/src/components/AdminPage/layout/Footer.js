import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="section blue darken-2 white-text center">
        Admin &copy; {new Date().getFullYear()}
      </footer>
    );
  }
}

export default Footer;
