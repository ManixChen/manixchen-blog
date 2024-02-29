import {ref} from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import storage from "@/utils/storage";
import Layout from "../views/Layout/index.vue";
import Home from "../views/Home/index.vue";
// import LoginView from "../views/Login/index.vue";
// import Resume from "../views/Resume/index.vue";
// import Works from "../views/Works/index.vue";
// import Blogs from "../views/Blogs/index.vue";
// import AllWorks from "../views/Works/AllWorks.vue";
 
const router = createRouter({
  linkActiveClass: 'active', 
  // mode: 'history',
  // history: createWebHistory(import.meta.env.BASE_URL),
  history:  createWebHashHistory(import.meta.env.BASE_URL), 
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
          component:Home ,
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
          component:  () => import("../views/Resume/index.vue"), 
        },
        {
          path: "/works",
          name: "works",
          component: () => import("../views/Works/index.vue") ,
          redirect: '/works/allworks',
          children:[
            { 
              path: "/works/allworks", ///works/allworks
              name: "allworks",
              component: () => import("../views/Works/AllWorks.vue") 
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
          component: () => import("../views/Blogs/index.vue") 
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("../views/Contact/index.vue") 
        },
      ]
    },
    {
      path: "/login",
      name: "Login", 
      component: () => import("../views/Login/index.vue") 
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = ref(false); 
  const whetnerLogin = Object.prototype.toString.call(storage.getCache("isLoging")) ;

  console.error(whetnerLogin);
  const isLoging = whetnerLogin== "[object Boolean]"?whetnerLogin:false;
  // console.log("isLoging::",isLoging);
  const uuuinfo = storage.getCache("cusser_info"); //记录用户信息
  if (Object.prototype.toString.call(uuuinfo) == "[object String]"&&isLoging){
    const userData = uuuinfo ? JSON.parse(uuuinfo) : {};
    isAuthenticated.value=true;
  } 
  console.log(isAuthenticated,uuuinfo);
  if (to.name !== 'Login' && !isAuthenticated.value){
    next({ name: 'Login' })
  }
  else{
    next()
  }
})

export default router;
