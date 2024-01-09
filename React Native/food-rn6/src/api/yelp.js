import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer J0VVt7HNSXSczPeHTzCf0lSXZKakGlkRU51Iz3qPPjV8Uyyssm_XkTNCujY7M654lxIHpJx7tItjtpOaeikDqiAbVtI7uo-MjJCky_erA3Ec09culu0DJY3dYcBaZHYx'
  }
});
