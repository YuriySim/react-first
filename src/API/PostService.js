import axios from 'axios';

export default class PostService {
  static async getPosts(limit = 10, page = 1) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getPostsById(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response;
  }

  static async getCommentsPost(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response;
  }
}