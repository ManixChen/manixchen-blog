import { createI18n } from 'vue-i18n'
import zh from "./lang/zh-cn.js"
import en from "./lang/en.js"
export default createI18n({ 
  legacy: false, // 让 setup 函数可以通过 t 访问
  globalInjection: true, // 让 template 可以像 vue2 那样使用 $t 来访问
	allowcomposition : true, // 允许組合式api
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  // fallbackWarn: false, 
  // missingWarn:false, //
  // silentFallbackWarn: false, 
  messages: {
    'zh-cn': zh,
    'en-us': en
  }
})