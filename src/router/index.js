import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout/index.vue";
import Home from "../views/Home/index.vue";
import LoginView from "../views/Login/index.vue";
import Resume from "../views/Resume/index.vue";
import Works from "../views/Works/index.vue";
import Blogs from "../views/Blogs/index.vue";
import Contact from "../views/Contact/index.vue";
import AllWorks from "../views/Works/AllWorks.vue";
 
const router = createRouter({
  linkActiveClass: 'active', 
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: "index",
      component: Layout, 
      redirect: 'home',//修复默认导航一直有active类的问题
      children:[
        {
          path: "/home",
          name: "home",
          component: Home,
          meta: {
            title: "首页"
          }
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
          redirect: '/works/allworks',
          children:[
            { 
              path: "/works/allworks", ///works/allworks
              name: "allworks",
              component: AllWorks
            },
            { 
              path: "/works/webdev", 
              name: "webdev",
              component: () => import("../views/Works/webdev/index.vue") 
            },
            { 
              path: "/works/phpdev", 
              name: "phpdev",
              component: () => import("../views/Works/phpdev/index.vue") 
            },
            { 
              path: "/works/javadev", 
              name: "javadev",
              component: () => import("../views/Works/javadev/index.vue") 
            },
            { 
              path: "/works/uidesign", 
              name: "uidesign",
              component: () => import("../views/Works/uidesign/index.vue") 
            },
          ]
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
