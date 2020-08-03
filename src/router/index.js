import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import VueDefault from "../views/Vue.vue";
// @ts-ignore
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vue",
    name: "Vue",
    component: VueDefault,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function() {
  //     return import(/* webpackChunkName: "about" */ "../views/About.vue");
  //   },
  // },
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  // routes,
  routes: routes,
  mode: "hash",
});

export default router;
