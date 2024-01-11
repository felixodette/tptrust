
const API_BASE_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/neuroscapeblog.wordpress.com/';

export const API_ENDPOINTS = {
  FETCH_ALL_POSTS: `${API_BASE_URL}posts/`,
  FETCH_SINGLE_POST: (postId) => `${API_BASE_URL}posts/${postId}/`,
  FETCH_LATEST_POSTS: (number) => `${API_BASE_URL}posts/?order_by=date&order=desc&number=${number}`,
};
