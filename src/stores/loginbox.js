import { ref, } from "vue";
import { defineStore } from "pinia";

// import { ElNotification } from "element-plus";
// import storage from "@/utils/storage";
// // 多语言切换
// import { useI18n } from "vue-i18n";

export const useLoginboxStore = defineStore("loginbox", () => {  
    // 管理登录状态
    const isLogin = ref(true); 
    const whetherRegister = function () {
    // console.log("whetherRegister",isLogin.value);
    isLogin.value = isLogin.value === false ? true : false; 
    }; 
    return {
        isLogin,
        whetherRegister
    }
});