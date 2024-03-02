import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";

import { ElNotification } from "element-plus";
import storage from "@/utils/storage";
// 多语言切换
import { useI18n } from "vue-i18n";

export const useRegisterStore = defineStore("register", () => {
  const { locale, t } = useI18n();
  const registerFormRef = ref();
  const contactForm = reactive({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const rules = computed(() => {
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
      ],
      repassword: [
        {
          required: true,
          message: t("register.NeedPassword"),
          trigger: "blur",
        },
        {
          validator: (rule, value, callback) => {
            // 判断 value 和 当前 form 中收集的 password 是否一致
            // console.log(value,contactForm.password);
            if (value !== contactForm.password) {
              callback(new Error(t("register.PasswordNeedSame")));
            } else {
              callback(); // 就算校验成功，也需要callback
            }
          },
          trigger: "blur",
        },
      ],
      email: [
        {
          required: true,
          message: t("register.NeedEmail"),
          trigger: "blur",
        },
        {
          // pattern:/^[a-zA-Z0-9_\.]+@?[a-zA-Z0-9-]{1,9}\+[\.a-zA-Z]{1,3}\+$/,
          pattern:
            /((\w+)|(\w+[!#$%&'*+\-,./=?^_`{|}~\w]*[!#$%&'*+\-,/=?^_`{|}~\w]))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)/,
          message: t("register.CorrectEmail"),
          trigger: "blur",
        },
      ],
    };
  });

  const submitForm = async (formCotact) => {
    if (!formCotact) return false;

    await formCotact.validate((valid, fields) => {
      if (valid) {
        storage.setCache("cusser_info", JSON.stringify(contactForm)); //记录用户信息
        //重置注册表单
        registerFormRef.value.resetFields();
        ElNotification({
          title: "submit!",
          message: t("login.SubmitSuccessfully"),
          type: "success",
        });
        // emit("whetherRegister");
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
          duration: 3000,
        });
      }
    });
  };

  return {
    locale,
    registerFormRef,
    contactForm,
    rules,
    submitForm,
  };
});
