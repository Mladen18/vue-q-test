<template>
  <section class="home">
    <PostList msg="Welcome to Your Vue.js App" />
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
};
</script>
