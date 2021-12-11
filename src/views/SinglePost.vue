<template>
  <section class="s-singlePost">
    <h1>Post: {{ postId }}</h1>
    <div class="c-post">
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      postId: this.$route.params.id,
    };
  },
  computed: {
    // Get title, check if empty
    title() {
      return this.post.title ? this.post.title.toUpperCase() : "";
    },

    // GET TEXT
    text() {
      return this.post.body;
    },
  },
  created() {
    //Check if post and get post on created
    if (this.post) {
      this.getPost();
    }
  },
  methods: {
    // FETCH POST - USING ROUTE ID
    getPost() {
      if (!this.postId) {
        return;
      }

      fetch("https://jsonplaceholder.typicode.com/posts/" + this.postId)
        .then((response) => response.json())
        .then((json) => (this.post = json));
    },
  },
};
</script>

<style scoped lang="scss">
.s-singlePost {
  margin: 30px;
}
.c-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #cce5ff;
  max-width: 600px;
  width: 100%;
  height: 350px;
  padding: 5px 10px;
  margin: 0 auto;
}
</style>
