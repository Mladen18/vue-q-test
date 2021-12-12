const url = "https://jsonplaceholder.typicode.com/posts";

const Api = {

  getPosts(item) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => (item = json));
  },

  getPost(item, id) {
    fetch(url + id)
      .then((response) => response.json())
      .then((json) => (item = json));
  },
};

export default Api;