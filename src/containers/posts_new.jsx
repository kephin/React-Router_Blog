import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// the function "reduxForm" is identical to "connect" helper in react-redux library

// the field component only knows how to wire up all the event handlers, action creators, etc.
// but it doesn't know how to produce JSX on the screen to our users
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNew extends Component {
  // need to pass the field argument, for 2 reasons:
  // 1. field object contains event handlers that we need to wire up to the JSX that we are returning
  // 2. in order to make sure that the Field component knows which input text it is responsible for
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          // field.input contains onChange={...}, onFocus={...}, onBlur={...}, etc.
          {...field.input}
        />
        <div
          className='text-help'
          // if the errors object has property that is the same as the "name" property in field component
          // pristine(initial) -> touched(focus out) -> invalid
        >
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      // handleSubmit is going to run redux-form side of things
      // this.onSubmit will get executed if the from is valid
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='contents'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link className='btn btn-success' to='/'>Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'test', categories: 'test', content: 'test'}
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) errors.title = 'Enter a title!';
  // if (values.title.length < 3) errors.title = 'Enter a title that is at least 3 characters!';
  if (!values.categories) errors.categories = 'Enter some categories.';
  if (!values.contents) errors.contents = 'Enter some contents, please.';

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes the form is invalid
  return errors;
}

// allow form to communicate directly from the component to the reducer
export default reduxForm({
  validate,
  // to specify the unique name for this particular form
  form: 'PostsNewForm',
})(connect(null, { createPost })(PostsNew));
