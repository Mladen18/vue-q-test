<template>
  <section class="s-posts">
    <PostList :posts="posts" />
  </section>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "Posts",
  components: {
    PostList,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    // ON CREATED GET POSTS IF EMPTY
    if (this.posts.length === 0) {
      this.getPosts();
    }
  },
  methods: {
    // FETCH ALL POSTS FROM API
    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => (this.posts = json));
    },
  },
};
</script>

<style scoped lang="scss">
.s-posts {
  margin: 10px 15px;
}
</style>
