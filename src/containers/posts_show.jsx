import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  // IMPORTANT!!
  // Always to remember that users can enter your application on every page they want
  // So the PostsShow component needs to be responsible to for fetching its own data
  componentDidMount() {
    // if we don't want to eagerly refresh posts
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) return <div>Loading...</div>;

    return (
      <div>
        <Link
          className='btn btn-success'
          to='/'
        >Back to Index
        </Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
