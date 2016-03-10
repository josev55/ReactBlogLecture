import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { posts: [], activePost: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state, posts: action.payload.data
      };
      break;
    default:
      return state;
  }
}
