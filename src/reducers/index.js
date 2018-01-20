import { combineReducers } from 'redux';
// use the alias for "reducer"
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  // beware to assign to the "form" key
  form: formReducer,
});

export default rootReducer;
