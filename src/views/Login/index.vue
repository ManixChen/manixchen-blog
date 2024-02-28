<script setup>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
const LoginForm = defineAsyncComponent(() => import("./LoginForm.vue"));
const RegisterForm = defineAsyncComponent(() => import("./RegisterForm.vue"));
const isLogin = ref(true);
// const inRegister = ref(false);

const whetherRegister = function () {
  console.log("whetherRegister",isLogin.value);
  // inRegister.value=isLogin.value?false:true;
  isLogin.value = isLogin.value === false ? true : false;
  // setTimeout(function() {
  //     inRegister.value=true;
  // }, 2000);
};
// import LoginForm from "./LoginForm.vue"
// import RegisterForm from "./RegisterForm.vue"

// import { testAPI } from "@/api/testApi";
// // 测试天气接口
// testAPI().then((res) => {
//   console.warn(res);
// });
// const async_icon = ()=>({
//   // 要加载的组件
//   component:import("./ProjectIntro.vue"),
//   // 加载过程中展示的组件
// //   loading:loading,
// //   // 加载失败时展示的组件
// //   error:page404,
//   // 延时加载时间
//   delay:500,
//   // 超时时间
//   timeout:2000,
// })
</script>

<template>
  <div class="user-box">
    <Transition name="sun-login">
      <LoginForm :whetherRegister="whetherRegister" v-if="isLogin" >
        
      </LoginForm>
    </Transition>
    <Transition name="sun-register">
      <RegisterForm  :whetherRegister="whetherRegister" v-if="!isLogin" />
    </Transition>
    <!-- <a @click="whetherRegister"  href="javascript:void(0)">注册</a> -->
  </div>
</template>

<style scoped lang="scss">
body {
  margin: 0;
}
.user-box {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: url("../../assets/page-bg-2.jpg") no-repeat 50%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  overflow: hidden;
}
.sun-login-enter-active {
  transition: all 0.2s ease-out;
}

.sun-login-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.sun-login-enter-from,
.sun-login-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}

/***注册动画*/
.sun-register-enter-active {
  transition: all 0.2s ease-out;
}

.sun-register-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.sun-register-enter-from,
.sun-register-leave-to {
  transform: translateX(4400px);
  opacity: 0;
}
</style>