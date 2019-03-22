import React, { Component } from 'react';
import Posts from './PostsComponents/Posts';
import FixedActionButton from './PostsComponents/FixedActionButton';

class PostsPage extends Component {
  render() {
    return (
      <>
        <Posts />
        <FixedActionButton />
      </>
    );
  }
}

export default PostsPage;
