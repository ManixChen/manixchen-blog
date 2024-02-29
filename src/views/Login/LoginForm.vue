<template>
  <div class="login-form">
    <span @click="changeLang" id="change-lang">
      <b v-if="locale == 'en-us'">中</b>
      <b v-if="locale == 'zh-cn'">ENG</b>
      <el-icon v-show="false"><DocumentCopy /></el-icon>
    </span>
    <header>
      <div>
        <el-icon @click="showTour"><HomeFilled /></el-icon>
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
            @click="submitForm(contactFormRef)"
          >
            {{ $t("login.name") }}
          </el-button>
        </div>
        <div class="action-footer action-bottom">
          {{ $t("login.NewTomillo") }}
          <a @click="whetherRegister" id="signup" href="javascript:void(0)">{{
            $t("login.SignUp")
          }}</a>
        </div>
        <div></div>
      </el-form>
    </section>

    <!-- 登录多语言切换向导 -->
    <el-tour v-model="loginLangTour" :finish="finishedTour">
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
import { nextTick, onMounted, reactive, ref } from "vue";
import router from "@/router";
import { ElNotification } from "element-plus";
import { HomeFilled, DocumentCopy } from "@element-plus/icons-vue";
import storage from "@/utils/storage";
// 多语言切换
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();
// 向导
const loginLangTour = ref(false);
// const name = ref()
// const signup = ref()

defineProps({
  whetherRegister: Function,
});

// 登录表单
const contactFormRef = ref();
// 表单默认值
const contactForm = reactive({
  name: "",
  password: "",
  rember: false,
});
// 登录校验规则
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
    {
      pattern: /^\S{6,15}$/,
      message: t("login.UserBetweeninfo"),
      trigger: "blur",
    },
  ],
  rember: [],
});

// 提交登录校验提示
const submitForm = async (formCotact) => {
  if (!formCotact) return false;

  await formCotact.validate((valid, fields) => {
    if (valid) {
      checkUserPower();
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
        duration: 4000,
      });
    }
  });
};

const btnRef = ref();
// 通过locale.value切换语言
const changeLang = (lang) => {
  // console.log(locale.value, lang);
  if (Object.prototype.toString.call(lang) == "[object String]") {
    locale.value = lang;
  } else locale.value = locale.value == "en-us" ? "zh-cn" : "en-us";
  storage.setCache("locale", locale.value);
};

// 向导操作
const showTour = () => {
  loginLangTour.value = true;
};

const finishedTour = () => {
  loginLangTour.value = false;
  storage.setCache("firstInit", false);
};

// 检查用户是否登录
const checkUserPower = function () {
  const uuuinfo = storage.getCache("cusser_info"); //记录用户信息
  if (Object.prototype.toString.call(uuuinfo) == "[object String]"){
    const userData = uuuinfo ? JSON.parse(uuuinfo) : {};
    // 注册的用户和登录的一致就允许登录(模拟登录功能，实际场景使用跨域请求服务器哦)
    if(contactForm.name == userData.name&&contactForm.password == userData.password){
      storage.setCache("isLoging", true);
      router.push('/'); 
      ElNotification({
        title: "submit!",
        message: t("login.SubmitSuccessfully"),
        type: "success",
      });
    }else{ 
    ElNotification({
        title: "error!",
        message: t("login.NeedRegisterFirst"),
        type: "error",
      });
    }
  }else{
    ElNotification({
        title: "error!",
        message: t("login.NeedRegisterFirst"),
        type: "error",
      });
  }
};

//
onMounted(() => {
  changeLang(storage.getCache("locale")); //通过缓存初始化语言
  // nextTick(() => {
    // console.warn(loginLangTour);
    // loginLangTour.value = true;
    // loginLangTour.TourStep.current =2;
  // });
});
</script>

<style lang="scss" src="./formbox.scss" scoped></style>