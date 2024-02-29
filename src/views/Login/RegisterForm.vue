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
          <el-input v-model="contactForm.name" 
          :placeholder="$t('login.UserName')"/>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="contactForm.email" 
          :placeholder="$t('register.UserEmail')"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="contactForm.password"
          :placeholder="$t('login.Password')"/>
        </el-form-item> 
        <el-form-item  prop="repassword">
          <el-input type="password"  v-model="contactForm.repassword"
               :placeholder="$t('register.RepeatPassword')" />
        </el-form-item> 
         
        <div class="action-footer vertical-align-center">
          <el-button
            size="large"
            type="primary"
            round
            class="login-circle"
            @click="submitForm(registerFormRef)"
          >
            {{$t('login.SignUp')}}
          </el-button>
        </div>
        <div class="action-footer action-bottom">
           {{$t('register.HasCount')}}
          <a @click="whetherRegister" href="javascript:void(0)"> {{$t('register.Login')}}</a>
        </div>
      </el-form>
    </section>
    <footer></footer>
  </div>
</template>
<script setup>

import { nextTick, onMounted,reactive, ref,toRefs} from "vue";
import { ElNotification } from "element-plus";
import { HomeFilled, DocumentCopy } from "@element-plus/icons-vue";
import storage from '@/utils/storage'
// 多语言切换
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();
defineProps({
  whetherRegister: Function,
})
const registerFormRef = ref();
const contactForm = reactive({
  name: "",
  email: "",
  password: "",
  repassword: "",
});
const rules = reactive({
  name: [ 
    { required: true, message: t("login.AccountCannotEmpty"), trigger: "blur" },
    { min: 4, message: t("login.MinUserinfo") },
    { max: 12, message: t("login.MaxUserinfo") },
  ],
  password: [
    {
      required: true,
      message: t("login.NeedPassword"),
      trigger: "blur",
    },
    { min: 6, message: t("login.PasswordMinChar") },
    { max: 15, message: t("login.PasswordMaxChar") },
  ], 
  repassword: [
    { required: true, message: t("register.NeedPassword") , trigger: 'blur' },
    {
      validator: (rule, value, callback) => { 
        // 判断 value 和 当前 form 中收集的 password 是否一致
        // console.log(value,contactForm.password);
        if (value !== contactForm.password) {
          callback(new Error(t("register.PasswordNeedSame")))
        } else {
          callback() // 就算校验成功，也需要callback
        }
      },
      trigger: 'blur'
    }
  ], 
  email: [
    {
      required: true,
      message:  t("register.NeedEmail"),
      trigger: "blur",
    },   
    {
      // pattern:/^[a-zA-Z0-9_\.]+@?[a-zA-Z0-9-]{1,9}\+[\.a-zA-Z]{1,3}\+$/,
      pattern:/((\w+)|(\w+[!#$%&'*+\-,./=?^_`{|}~\w]*[!#$%&'*+\-,/=?^_`{|}~\w]))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)/,
      message: t("register.CorrectEmail"),
      trigger: "blur",
    },
  ], 
});

const submitForm = async (formCotact) => {
  if (!formCotact) return false;

  await formCotact.validate((valid, fields) => {
    if (valid) { 
      storage.setCache("cusser_info",JSON.stringify(contactForm));//记录用户信息
      // registerFormRef.resetFields();
      
      ElNotification({
        title: "submit!",
        message: t("login.SubmitSuccessfully"),
        type: "success",
      });
    } else {
      let str = "";
      for (let key in fields) {
        if (fields[key]) {
          for (let k in fields[key]) {
            str += fields[key][k].message + "<br/>";
          }
        }
      }
      ElNotification({
        title: t("login.WrongInformation"),
        dangerouslyUseHTMLString: true,
        message: str,
        type: "error",
        duration: 60001,
      });
    }
  });
};
</script>

<style lang="scss" src="./formbox.scss" scoped></style>