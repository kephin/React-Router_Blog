import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';

class PostIndex extends Component {
  // Be automatically called by react immediately after this component has shown
  // up inside the DOM, for one time
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts index!
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);
