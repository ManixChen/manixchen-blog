<template>
  <div class="login-form">
    <header>
      <div>
        <el-icon @click="loginstore.showTour"><HomeFilled /></el-icon>
      </div>
      <div>Login</div>
    </header>
    <section>
      <el-form
        class="loginForm"
        ref="contactFormRef"
        :rules="rules"
        :model="contactForm"
        label-position="top"
        labelSuffix=""
        requireAsteriskPosition="right"
        label-width="200px"
      >
        <el-form-item prop="name">
          <el-input
            id="name"
            v-model="contactForm.name"
            :placeholder="$t('login.UserName')"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="contactForm.password"
            :placeholder="$t('login.Password')"
          />
        </el-form-item>
        <div class="rember">
          <el-checkbox
            @change="loginstore.remberInfo"
            v-model="contactForm.rember"
            :label="$t('login.RememberMe')"
            name="type"
          />
          <a href="javascript:void(0)" class="pull-right">{{
            $t("login.ForgotPassword")
          }}</a>
        </div>
        <div class="action-footer vertical-align-center">
          <el-button
            size="large"
            type="primary"
            round
            class="login-circle"
            @click="loginstore.submitForm(contactFormRef)"
          >
            {{ $t("login.name") }}
          </el-button>
        </div>
        <div class="action-footer action-bottom">
          {{ $t("login.NewTomillo") }}
          <a
            @click="loginstore.loginboxStore.whetherRegister"
            id="signup"
            href="javascript:void(0)"
            >{{ $t("login.SignUp") }}</a
          >
        </div>
        <div></div>
      </el-form>
    </section>

    <!-- 登录多语言切换向导             -->
    <el-tour v-model="loginLangTour" :finish="loginstore.finishedTour">
      <el-tour-step
        target="#change-lang"
        title="切换语言"
        description="Hi小主，这里支持中英文切换哦，请不要迷路……"
      />
      <el-tour-step
        target="#name"
        title="输入账号登录"
        description="请输入您的账号进行登录"
      />
      <el-tour-step
        target="#signup"
        title="这里注册"
        description="如果第一次来到我的个人博客请先注册哦"
      />
    </el-tour>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useLoginStore } from "@/stores/login";
const loginstore = useLoginStore();
const {  loginLangTour, contactFormRef, contactForm, rules } =  storeToRefs(loginstore);
import { HomeFilled } from "@element-plus/icons-vue";
// 父组件方法 
</script>

<style lang="scss" src="./formbox.scss" scoped></style>