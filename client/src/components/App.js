import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
