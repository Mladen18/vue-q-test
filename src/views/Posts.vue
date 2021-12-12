<template>
  <section class="s-posts">
    <div class="c-search">
      <input
        v-model="searchText"
        class="c-search__input"
        type="text"
        placeholder="Search..."
      />
    </div>
    <PostList :posts="searchedPosts" :message="message" />
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
  props: {
    message: {
      type: String,
      required: true,
      default: "Hello",
      validator: function (value) {
        return value !== "";
      },
    },
  },
  data() {
    return {
      posts: [],
      searchText: "",
    };
  },
  computed: {
    searchedPosts() {
      if (this.searchText) {
        return this.posts.filter((post) => {
          return post.title
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
        });
      } else {
        return this.posts;
      }
    },
  },
  created() {
    // ON CREATED GET POSTS IF EMPTY
    if (this.posts.length === 0) {
      this.getPosts();
    }
    // Log component name
    console.log(this.message + this.$options.name);
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
  margin: 0 15px;
}
.c-search {
  &__input {
    padding: 10px 15px;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }
}
</style>
