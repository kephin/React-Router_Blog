import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

const convertArrayToObject = (array, key) => array
  .reduce((object, item) => ({ ...object, [item[key]]: item }), {});

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      const posts = { ...state };
      delete posts[action.payload];
      return posts;
    case FETCH_POSTS:
      return convertArrayToObject(action.payload.data, 'id');
    case FETCH_POST:
      // take all the posts that we've already fetched
      // add existing application level state
      return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}
