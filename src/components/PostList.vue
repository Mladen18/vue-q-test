<template>
  <div class="c-postList">
    <div v-if="hasPosts">
      <p>No posts found</p>
    </div>
    <ul v-else class="c-postList__items">
      <li v-for="post in posts" :key="post.id" class="c-postList__item">
        <router-link :to="`/post/${post.id}`" class="c-postList__link">
          <h4>{{ post.title }}</h4>
          <p>{{ post.body }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    message: {
      type: String,
      required: true,
      default: "Hello",
      validator: function (value) {
        return value !== "";
      },
    },
    posts: {
      type: Array,
      required: true,
      validator: function (value) {
        return value === [] || value.length >= 0;
      },
    },
  },
  computed: {
    // Check if has posts
    hasPosts() {
      return this.posts.length <= 0;
    },
  },
  created() {
    // Log component name
    console.log(this.message + this.$options.name);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-postList {
  &__items {
    display: flex;
    list-style-type: none;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item {
    display: block;
    margin: 10px 10px;
    background: #cce5ff;
    max-width: 300px;
    width: 100%;
    height: 250px;
    padding: 5px 10px;
  }

  &__link {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
