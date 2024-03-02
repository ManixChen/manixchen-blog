<script setup>
import { defineAsyncComponent} from "vue"; 
import { storeToRefs } from "pinia";
const LoginForm = defineAsyncComponent(() => import("./LoginForm.vue"));
const RegisterForm = defineAsyncComponent(() => import("./RegisterForm.vue"));
import { useLoginboxStore } from "@/stores/loginbox";

const loginboxStore = useLoginboxStore();
const { isLogin} = storeToRefs(loginboxStore)

const whetherRegister =loginboxStore.whetherRegister
</script>

<template>
  <div class="user-box">
    <Transition name="sun-login">
      <LoginForm @whetherRegister="whetherRegister" v-if="isLogin" />
    </Transition>
    <Transition name="sun-register">
      <RegisterForm  @whetherRegister="whetherRegister" v-if="!isLogin" />
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
  transition: all 0.1s ease-out;
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
  transition: all 0.1s ease-out;
}

.sun-register-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.sun-register-enter-from,
.sun-register-leave-to {
  transform: translateX(2400px);
  opacity: 0;
}
</style>