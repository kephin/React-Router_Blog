import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';

const convertObjectToArray = object => Object.keys(object).map(key => (object[key]));
class PostIndex extends Component {
  // Be automatically called by react immediately after this component has shown
  // up inside the DOM, for one time
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return convertObjectToArray(this.props.posts)
      .map(post => (
        <li className='list-group-item' key={post.id}>
          {post.title}
        </li>
      ));
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className='list-group'>
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
