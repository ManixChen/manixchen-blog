// 获取浏览器默认语言
const getBrowserLang = function() {
  let browserLang = navigator.language
    ? navigator.language
    : navigator.browserLanguage;
  let defaultBrowserLang = "";
  if (
    browserLang.toLowerCase() === "us" ||
    browserLang.toLowerCase() === "en" ||
    browserLang.toLowerCase() === "en_us"
  ) {
    defaultBrowserLang = "en_us";
  } else {
    defaultBrowserLang = "zh_cn";
  }
  return defaultBrowserLang.toLocaleLowerCase();
};

export default getBrowserLang;