import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "@/views/Games.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "app",
  //   children: [
  //     {
  //       path: "/game",
  //       name: "Game",
  //       component: Game
  //     }
  //   ],
  // },
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/History.vue"),
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
