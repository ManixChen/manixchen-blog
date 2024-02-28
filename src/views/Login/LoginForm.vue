
<template>
  <div class="login-form">
    <header>
      <div>
        <el-icon><HomeFilled /></el-icon>
      </div>
      <div>LOGIN</div>
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
          <el-input v-model="contactForm.name" placeholder="User Name" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="contactForm.password" placeholder="Password" />
        </el-form-item>
        <div class="rember">
          <el-checkbox
            v-model="contactForm.rember"
            label="Remember me"
            name="type"
          />
          <a href="javascript:void(0)" class="pull-right"
            >Forgot your password ?</a
          >
        </div>
        <div class="action-footer vertical-align-center">
          <el-button
            size="large"
            type="primary"
            round
            class="login-circle"
            @click="submitForm(contactFormRef)"
          >
            Commit
          </el-button>
        </div>
        <div class="action-footer action-bottom">
          New to Tomillo? 
          <a @click="whetherRegister" href="javascript:void(0)">Sign Up</a>
        </div>
      </el-form>
    </section>
    <footer></footer>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElNotification } from "element-plus";
import { HomeFilled } from "@element-plus/icons-vue";
defineProps({
  whetherRegister: Function,
})
const contactFormRef = ref();
const contactForm = reactive({
  name: "",
  email: "",
  message: "",
});
const rules = reactive({
  name: [
    // required是否必填,message不符合此规则时的提示信息,
    // trigger触发此条规则校验的时机，有两个值, blur 或 change,默认就是blur和change都会进行校验
    // min此字段的最小长度，max此字段的最大长度
    // pattern 正则表达式
    { required: true, message: "账户不能为空", trigger: "blur" },
    { min: 6, max: 14, message: "用户长度不要超过14位，最短6位" },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
    {
      type: "password",
      message: "Please input correct password",
      trigger: ["blur", "change"],
    },
  ],
  rember: [],
});

const submitForm = async (formCotact) => {
  if (!formCotact) return false;

  await formCotact.validate((valid, fields) => {
    if (valid) {
      ElNotification({
        title: "submit!",
        message: "提交成功",
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
        title: "信息错误!",
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