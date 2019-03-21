import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="section teal darken-2 white-text center">
        <p className="flow-text">
          WebSiteName &copy; {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
}

export default Footer;
