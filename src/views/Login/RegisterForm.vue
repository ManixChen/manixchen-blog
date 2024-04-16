<template>
  <div class="login-form">
    <header>
      <div>
        <el-icon><HomeFilled /></el-icon>
      </div>
      <div>Register</div>
    </header>
    <section>
      <el-form
        class="loginForm"
        ref="registerFormRef"
        :rules="rules"
        :model="contactForm"
        label-position="top"
        labelSuffix=""
        requireAsteriskPosition="right"
        label-width="200px"
      >
        <el-form-item prop="name">
          <el-input
            v-model="contactForm.name"
            :placeholder="$t('login.UserName')"
          />
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            v-model="contactForm.email"
            :placeholder="$t('register.UserEmail')"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="contactForm.password"
            :placeholder="$t('login.Password')"
          />
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            type="password"
            v-model="contactForm.repassword"
            :placeholder="$t('register.RepeatPassword')"
          />
        </el-form-item>

        <div class="action-footer vertical-align-center">
          <el-button
            size="large"
            type="primary"
            round
            class="login-circle"
            @click="registerstore.submitForm(registerstore.registerFormRef)"
          >
            {{ $t("login.SignUp") }}
          </el-button>
        </div>
        <div class="action-footer action-bottom">
          {{ $t("register.HasCount") }}
          <a @click="registerstore.loginboxStore.whetherRegister" href="javascript:void(0)">
            {{ $t("register.Login") }}</a
          >
        </div>
      </el-form>
    </section>
    <footer></footer>
  </div>
</template>
<script setup>
import { HomeFilled } from "@element-plus/icons-vue";

import { storeToRefs } from "pinia";
import { useRegisterStore } from "@/stores/register";
const registerstore = useRegisterStore();
const { registerFormRef, contactForm, rules } = storeToRefs(registerstore);
// 父组件方法 
// defineEmits(["whetherRegister"]);
</script>

<style lang="scss" src="./formbox.scss" scoped></style>