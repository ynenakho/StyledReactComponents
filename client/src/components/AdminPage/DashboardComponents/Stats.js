import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';
import {
  slideInDown,
  slideInLeft,
  slideInRight,
  fadeIn
} from 'react-animations';

const slideInDownAnimation = keyframes`${slideInDown}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const FadeinDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;
const SlideInDownDiv = styled.div`
  animation: 1s ${slideInDownAnimation};
`;
const SlideInLeftDiv = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;
const SlideInRightDiv = styled.div`
  animation: 1s ${slideInRightAnimation};
`;

class Stats extends Component {
  render() {
    return (
      <FadeinDiv className="section section-stats center grey lighten-4">
        <div className="row">
          <div className="col s12 m6 l3">
            <SlideInLeftDiv>
              <div className="card-panel blue lighten-1 white-text center">
                <i className="material-icons medium">insert_emoticon</i>
                <h5>Monthly Visitors</h5>
                <h3 className="count" ref={count => (this.count = count)}>
                  28300
                </h3>
                <div className="progress grey lighten-1">
                  <div className="determinate white" style={{ width: '40%' }} />
                </div>
              </div>
            </SlideInLeftDiv>
          </div>
          <div className="col s12 m6 l3">
            <SlideInDownDiv>
              <div className="card-panel center">
                <i className="material-icons medium">mode_edit</i>
                <h5>Blog Posts</h5>
                <h3 className="count" ref={count => (this.count = count)}>
                  105
                </h3>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue lighten-1"
                    style={{ width: '20%' }}
                  />
                </div>
              </div>
            </SlideInDownDiv>
          </div>
          <div className="col s12 m6 l3">
            <SlideInDownDiv>
              <div className="card-panel blue lighten-1 white-text center">
                <i className="material-icons medium">mode_comment</i>
                <h5>Comments</h5>
                <h3 className="count" ref={count => (this.count = count)}>
                  1203
                </h3>
                <div className="progress grey lighten-1">
                  <div className="determinate white" style={{ width: '25%' }} />
                </div>
              </div>
            </SlideInDownDiv>
          </div>
          <div className="col s12 m6 l3">
            <SlideInRightDiv>
              <div className="card-panel center">
                <i className="material-icons medium">supervisor_account</i>
                <h5>Users</h5>
                <h3 className="count" ref={count => (this.count = count)}>
                  350
                </h3>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue lighten-1"
                    style={{ width: '10%' }}
                  />
                </div>
              </div>
            </SlideInRightDiv>
          </div>
        </div>
      </FadeinDiv>
    );
  }
}

export default Stats;
