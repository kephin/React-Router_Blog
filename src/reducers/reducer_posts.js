import { FETCH_POSTS } from '../actions';

const convertArrayToObject = (array, key) => array
  .reduce((object, item) => ({ ...object, [item[key]]: item }), {});

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return convertArrayToObject(action.payload.data, 'id');

    default:
      return state;
  }
}
