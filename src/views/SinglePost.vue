<script>
import { h } from "vue";

export default {
  name: "SinglePost",
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
    // Log component name
    console.log(this.message + this.$options.name);
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
  // RENDER tempalte
  render({ postId, title, text }) {
    return h("section", { class: "s-singlePost" }, [
      h("h1", {}, "Post: " + postId),
      h("div", { class: "c-post" }, [h("h4", title), h("p", text)]),
    ]);
  },
};
</script>
<style scoped lang="scss">
.s-singlePost {
  margin: 30px 15px;
}
.c-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #cce5ff;
  max-width: 600px;
  width: auto;
  height: 350px;
  padding: 5px 10px;
  margin: 0 auto;
}
</style>
