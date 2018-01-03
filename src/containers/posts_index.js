import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index';

class PostIndex extends Component {
  // Be automatically called by react immediately after this component has shown up inside the DOM, for one time
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

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPosts }, dispatch);

export default connect(null, mapDispatchToProps)(PostIndex);
