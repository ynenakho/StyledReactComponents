import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import TravelWebPage from './TravelWebPage/TravelWebPage';
import CloudHostingPage from './CloudHostingPage/CloudHostingPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/travel" component={TravelWebPage} />
        <Route exact path="/cloudhosting" component={CloudHostingPage} />
      </BrowserRouter>
    );
  }
}

export default App;
