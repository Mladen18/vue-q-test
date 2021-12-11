<template>
  <section class="home">
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
    if (this.posts.length === 0) {
      this.getPosts();
    }
  },
  methods: {
    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => (this.posts = json));
    },
  },
};
</script>
