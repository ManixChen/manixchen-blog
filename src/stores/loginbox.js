import { computed, reactive, ref, toRef, toRefs } from "vue";
import { defineStore } from "pinia";
import storage from "@/utils/storage";
//  多语言切换
import { useI18n } from "vue-i18n";
import getBrowserLang from "../utils/navigater.js"

export const useLoginboxStore = defineStore("loginbox", () => {
  // 多语言切换
  const { t, locale } = useI18n(); 

  // 管理登录状态
  const isLogin = ref(true);
  // 是否注册
  const whetherRegister = function () {
    isLogin.value = isLogin.value === false ? true : false;
  };
  // 通过locale.value切换语言
  const changeLang = (lang) => {
    // console.warn("lang::::",lang); 
    // 初始化语言
    if (Object.prototype.toString.call(lang) == "[object String]") {
      locale.value = lang;
    }else if (Object.prototype.toString.call(lang) == "[object Null]") {
      locale.value = getBrowserLang() ;//getBrowserLang();
    } else {
      locale.value = locale.value == "en-us" ? "zh-cn" : "en-us";
    }
    storage.setCache("locale", locale.value);
  }; 

  return {
    isLogin,
    locale,
    changeLang,
    whetherRegister,
  };
});