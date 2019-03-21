import React, { Component } from 'react';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Landing />
        <Footer />
      </>
    );
  }
}

export default App;
