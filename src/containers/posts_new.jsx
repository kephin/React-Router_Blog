import React, { Component } from 'react';

// the function "reduxForm" is identical to "connect" helper in react-redux library

// the field component only knows how to wire up all the event handlers, action creators, etc.
// but it doesn't know how to produce JSX on the screen to our users
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // need to pass the field argument, for 2 reasons:
  // 1. field object contains event handlers that we need to wire up to the JSX that we are returning
  // 2. in order to make sure that the Field component knows which input text it is responsible for
  renderField(field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          // field.input contains onChange={...}, onFocus={...}, onBlur={...}, etc.
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
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
          name='content'
          component={this.renderField}
        />
      </form>
    );
  }
}

// allow form to communicate directly from the component to the reducer
export default reduxForm({
  // to specify the unique name for this particular form
  form: 'PostsNewForm',
})(PostsNew);
