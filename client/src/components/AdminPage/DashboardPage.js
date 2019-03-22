import React, { Component } from 'react';
import Stats from './DashboardComponents/Stats';
import Visitors from './DashboardComponents/Visitors';
import RecentPostsTodos from './DashboardComponents/RecentPostsTodos';
import FixedActionButton from './DashboardComponents/FixedActionButton';

class DashboardPage extends Component {
  render() {
    return (
      <>
        <Stats />
        <Visitors />
        <RecentPostsTodos />
        <FixedActionButton />
      </>
    );
  }
}

export default DashboardPage;
