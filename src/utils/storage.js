class LocalCache {
    // 添加
    setCache(key, value) {
      if(Object.prototype.toString.call(key)!='[object String]')return false;
        window.localStorage.setItem(key, JSON.stringify(value))
        
      console.warn("setCache",key,value)
    }
    // 查找
    getCache(key) {
      // obj=>sting=>obj
      if(Object.prototype.toString.call(key)!='[object String]')return false;
      const value = window.localStorage.getItem(key)
      console.warn("getCache",value)
      if (Object.prototype.toString.call(value) == "[object String]") {//Object.prototype.toString.call(uuuinfo) == "[object String]"
        return JSON.parse(value)
      }
    }
    // 删除
    delCache(key) {
      if(Object.prototype.toString.call(key)!='[object String]')return false;
      window.localStorage.removeItem(key)
    }
    // 清理
    clearCache() {
      window.localStorage.clear()
    }
  }
  
  export default new LocalCache()