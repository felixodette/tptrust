
const API_BASE_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/neuroscapeblog.wordpress.com/';

export const API_ENDPOINTS = {
  FETCH_ALL_POSTS: `${API_BASE_URL}posts/`,
  FETCH_HOME_POSTS: `${API_BASE_URL}posts/?limit=4`,
};
