import { onMounted, reactive, ref,nextTick, computed } from "vue";
import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import router from "@/router";
import { ElNotification } from "element-plus";
import storage from "@/utils/storage";

export const useLoginStore = defineStore("login", () => {
  // 多语言切换
  const { locale, t } = useI18n(); 
  // 向导
  const loginLangTour = ref(false);
  // 登录表单
  const contactFormRef = ref();
  // 表单默认值
  const contactForm = reactive({
    name: "",
    password: "",
    rember: false,
  });

  // 登录校验规则
  // const rules = reactive({
  //   name: [
  //     {
  //       required: true,
  //       message: t("login.AccountCannotEmpty"),
  //       trigger: "blur",
  //     },
  //     { min: 4, message: t("login.MinUserinfo") },
  //     { max: 12, message: t("login.MaxUserinfo") },
  //   ],  
  // });

  // 提交登录校验提示 （计算属性才能解决在store中相应数据问题）
  const rules = computed(()=>{
    return {
      name: [
        {
          required: true,
          message: t("login.AccountCannotEmpty"),
          trigger: "blur",
        },
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
    }
  })
  const WrongInformation =computed(()=>t("login.WrongInformation"));
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
              str += fields[key][k].message + "\\n";
            }
          }
        }
        ElNotification({
          title: WrongInformation,
          dangerouslyUseHTMLString: true,
          message: str,
          type: "error",
          duration: 4000,
        });
      }
    });
  };

  // 通过locale.value切换语言
  const changeLang = (lang) => {
    // 初始化语言
    if (Object.prototype.toString.call(lang) == "[object String]") {
      locale.value = lang;
    } else{
      locale.value = locale.value == "en-us" ? "zh-cn" : "en-us";
    }
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
    if (Object.prototype.toString.call(uuuinfo) == "[object String]") {
      const userData = uuuinfo ? JSON.parse(uuuinfo) : {};
      // 注册的用户和登录的一致就允许登录(模拟登录功能，实际场景使用跨域请求服务器哦)
      if (
        contactForm.name == userData.name &&
        contactForm.password == userData.password
      ) {
        storage.setCache("isLoging", true);
        storage.setCache("isRember", contactForm.rember);
        if (contactForm.rember) {
          storage.setCache("currentUserInfo", contactForm);
        }

        router.push("/");
        ElNotification({
          title: "submit!",
          message: t("login.SubmitSuccessfully"),
          type: "success",
        });
      } else {
        ElNotification({
          title: "error!",
          message: t("login.NeedRegisterFirst"),
          type: "error",
        });
      }
    } else {
      ElNotification({
        title: "error!",
        message: t("login.NeedRegisterFirst"),
        type: "error",
      });
    }
  };
  // 是否记住用户信息
  const remberInfo=function(){
    storage.setCache("isRember",contactForm.rember )
  }
  //
  onMounted(() => {
    changeLang(storage.getCache("locale")); //通过缓存初始化语言
    nextTick(() => {
      // 查看是否记住密码 
      const isRember = storage.getCache("isRember")===true?true:false;
      if(isRember){
        contactForm.rember = isRember;
        const uuuinfo =JSON.parse( storage.getCache("cusser_info"));
        contactForm.name=uuuinfo.name;
        contactForm.password=uuuinfo.password;
      }
    // console.warn(loginLangTour);
    // loginLangTour.value = true;
    // loginLangTour.TourStep.current =2;
    });
  });

  return {
    locale,
    loginLangTour,
    contactFormRef,
    contactForm,
    rules,
    changeLang,
    checkUserPower,
    finishedTour,
    showTour,
    submitForm,
    remberInfo
  };
});
