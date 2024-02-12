import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import axios from "axios";
import { testAPI } from "@/api/testApi";

// 测试天气接口
testAPI().then(res => {
  console.warn(res);
}); 

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
