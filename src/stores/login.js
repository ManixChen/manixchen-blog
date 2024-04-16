import { onMounted, reactive, ref,nextTick, computed } from "vue";
import { defineStore } from "pinia"; 
import { useI18n } from "vue-i18n";
import router from "@/router";
import { ElNotification } from "element-plus";
import storage from "@/utils/storage";
import { useLoginboxStore } from "@/stores/loginbox"; 

export const useLoginStore = defineStore("login", () => {
  // 通用用户模块
  const loginboxStore = useLoginboxStore();
   
  const {  t } = useI18n(); 
  // 向导
  const loginLangTour = ref(false);
  // 登录表单
  const contactFormRef = ref();
  // 表单默认值
  const contactForm = reactive({
    // name: '',
    // password: '',
    rember: false,
  });
  const infoStr=ref(); 

  // 提交登录校验提示 （计算属性才能解决在store中相应数据问题）
  // const rules = computed(()=>{
  //   return {
  //     name: [
  //       {
  //         required: true,
  //         message: t("login.AccountCannotEmpty"),
  //         trigger: ["blur",'change'],
  //       },
  //       { min: 4, message: t("login.MinUserinfo") ,
  //       trigger: ["blur",'change'],},
  //       { max: 12, message: t("login.MaxUserinfo"),
  //       trigger: ["blur",'change'], },
  //     ],
  //     password: [
  //       {
  //         required: true,
  //         message: t("login.NeedPassword"),
  //         trigger: ["blur",'change'],
  //       },
  //       { min: 6, message: t("login.PasswordMinChar"),
  //       trigger: ["blur",'change'], },
  //       { max: 15, message: t("login.PasswordMaxChar") ,
  //       trigger: "blur",},
  //       {
  //         pattern: /^\S{6,15}$/,
  //         message: t("login.UserBetweeninfo"),
  //         trigger: "blur",
  //       },
  //     ],
  //     rember: [],
  //   }
  // })
  const rules = reactive({
    name: [
      {
        required: true,
        message: computed(()=>{return t("login.AccountCannotEmpty")}),
        trigger: ["blur",'change'],
      },
      { min: 4, message: computed(()=>{return t("login.MinUserinfo")}) ,
      trigger: ["blur",'change'],},
      { max: 12, message: computed(()=>{return t("login.MaxUserinfo")}),
      trigger: ["blur",'change'], },
    ],
    password: [
      {
        required: true,
        message: computed(()=>{return t("login.NeedPassword")}),
        trigger: ["blur",'change'],
      },
      { min: 6, message: computed(()=>{return t("login.PasswordMinChar")}),
      trigger: ["blur",'change'], },
      { max: 15, message: computed(()=>{return t("login.PasswordMaxChar")}) ,
      trigger: "blur",},
      {
        pattern: /^\S{6,15}$/,
        message: computed(()=>{return t("login.UserBetweeninfo")}),
        trigger: "blur",
      },
    ],
    rember: [],
  })
  // const WrongInformation =;
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
              str += `${fields[key][k].message } </br>`; 
            }
          }
        }
        infoStr.value = str;
        WrongInformation(str);
      }
    });
  };
  const  WrongInformation= async (formCotact) => { 
    ElNotification({
      title: t("login.WrongInformation"),
      dangerouslyUseHTMLString: true,
      message: formCotact,
      type: "error",
      duration: 3000,
    });
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
        const userWarning =function (str) {
          ElNotification({
            title: "error!",
            message: str,
            type: "error",
          });
        }
        // 密码不正确
        if(contactForm.password != userData.password){
          contactForm.password="";
          userWarning(t("login.IncorrectPassword"))
        }else{ 
          userWarning(t("login.NeedRegisterFirst"));
        }
        
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
    nextTick(() => { 
      // contactForm.value.resetFields()
      loginboxStore.changeLang(storage.getCache("locale")); //通过缓存初始化语言
      // 查看是否记住密码 
      const isRember = storage.getCache("isRember")===true?true:false;
      if(isRember){
        contactForm.rember = isRember;
        const uuuinfo =JSON.parse( storage.getCache("cusser_info"));
        console.error("uuuinfo",uuuinfo)
        if(uuuinfo){ 
          contactForm.name=uuuinfo.name;
          contactForm.password=uuuinfo.password;
        }
      }
    // console.warn(loginLangTour);
    // loginLangTour.value = true;
    // loginLangTour.TourStep.current =2;
    contactFormRef.value.resetFields()
    contactFormRef.value.clearValidate('name')
    contactFormRef.value.clearValidate('password')
    });
  });

  return { 
    loginLangTour,
    contactFormRef,
    contactForm,
    rules, 
    checkUserPower,
    finishedTour,
    showTour,
    submitForm,
    remberInfo,
    loginboxStore
  };
});
