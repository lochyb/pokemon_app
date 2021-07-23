import * as actions from "../actions/index";

export const initialState = {
  posts: {},
  loading: true,
  hasErrors: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};

export default reducer;
