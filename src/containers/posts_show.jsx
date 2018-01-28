import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostsShow extends Component {
  // IMPORTANT!!
  // Always to remember that users can enter your application on every page they want
  // So the PostsShow component needs to be responsible to for fetching its own data
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// 1st arguement: application state
// 2nd arguement: own props, which heads to this component, this.props === ownProps 
function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
