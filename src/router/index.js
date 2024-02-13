import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout/index.vue";
import Home from "../views/Home/index.vue";
import LoginView from "../views/Login/index.vue";
import Resume from "../views/Resume/index.vue";
import Works from "../views/Works/index.vue";
import Blogs from "../views/Blogs/index.vue";
import Contact from "../views/Contact/index.vue";
 
const router = createRouter({
  linkActiveClass: 'active', 
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Layout, 
      children:[
        {
          path: "",
          // name: "home",
          component: Home,
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/About/index.vue"),
        },
        {
          path: "/resume",
          name: "resume",
          component: Resume,
        },
        {
          path: "/works",
          name: "works",
          component: Works,
        },
        {
          path: "/blogs",
          name: "blogs",
          component: Blogs,
        },
        {
          path: "/contact",
          name: "contact",
          component: Contact,
        },
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
  ],
});

export default router;
