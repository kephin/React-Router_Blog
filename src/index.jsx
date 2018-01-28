import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import PostsShow from './containers/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Be careful that the order of our routes matters!
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/posts/:id' component={PostsShow} />
          <Route path='/' component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
