// Create Redux action types
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export const fetchPosts = (url) => {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const data = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let results = data.results;
          let promisesArray = results.map((result) => {
            return fetch(result.url).then((response) => response.json());
          });
          return Promise.all(promisesArray);
        })
        .then((data) => {
          return data;
        });
      dispatch(getPostsSuccess(data));
    } catch (error) {}
  };
};
