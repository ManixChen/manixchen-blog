<script setup>
import { defineAsyncComponent} from "vue"; 
import { storeToRefs } from "pinia";
import { DocumentCopy } from "@element-plus/icons-vue";
const LoginForm = defineAsyncComponent(() => import("./LoginForm.vue"));
const RegisterForm = defineAsyncComponent(() => import("./RegisterForm.vue"));
import { useLoginboxStore } from "@/stores/loginbox";

const loginboxStore = useLoginboxStore();
const { isLogin,locale} = storeToRefs(loginboxStore)
</script>

<template>
  <div class="user-box">
    <div class="container">
      <span @click="loginboxStore.changeLang" id="change-lang">
        <b v-if="locale == 'en-us'">中</b>
        <b v-if="locale == 'zh-cn'">ENG</b>
        <el-icon v-show="false"><DocumentCopy /></el-icon>
      </span>
      <Transition name="sun-login">
        <LoginForm v-if="isLogin" />
      </Transition>
      <Transition name="sun-register">
        <RegisterForm  v-if="!isLogin" />
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
body {
  margin: 0;
}
.container{
  display: inline-block ;
  position: relative;
}
.user-box {
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: url("../../assets/page-bg-2.jpg") no-repeat 50%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  
  #change-lang{
    position: absolute;
    right: 30px;
    top: 15px;
    z-index: 1;
    cursor: pointer;
    b{
      font-size: 1.8rem;
      opacity: 0.4;
      color: #4A97E7;
      &:hover {
        opacity: 1;
      }
    }
  }
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