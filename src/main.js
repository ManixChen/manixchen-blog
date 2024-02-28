// import "./assets/main.css";
import "./assets/manix.scss"
import 'element-plus/theme-chalk/display.css'
import { createApp } from "vue";
import { createPinia } from "pinia";
import 'element-plus/es/components/message/style/css' 
import 'element-plus/es/components/notification/style/css' 
import { ElNotification,ElMessage } from 'element-plus'


import App from "./App.vue";
import router from "./router";
// import axios from "axios"; 

const app = createApp(App);
app.config.globalProperties.$notify =  ElNotification;
app.config.globalProperties.$message =  ElMessage;
app.use(createPinia());
app.use(router);

app.mount("#app");
