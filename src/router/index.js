import { createRouter, createWebHistory } from "vue-router";
import Posts from "../views/Posts.vue";

// 404
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/post/:id",
    name: "SinglePost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SinglePost.vue"),
  },
  { path: '/:notFound(.*)', component: NotFound, name: 'NotFound' }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
