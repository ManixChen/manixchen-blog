import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useScroll  } from "@vueuse/core";
import storage from "@/utils/storage";
import router from "@/router";

export const useIndexStore = defineStore('index', () => {  
  const isLoging = ref(Object.prototype.toString.call(storage.getCache("isLoging")) == "[object Boolean]"?true:false);
  const isActive = ref(false)
  const bgmusic = ref()
//   音乐播放
  const isPlay = ref(false) 
  const {  x, y } = useScroll(window)
  // 音乐播放
  function playAudio() {
    if (isPlay.value) {
      bgmusic.value.pause()
      isPlay.value = false
    } else {
      bgmusic.value.play()
      isPlay.value = true
    }
  } 
  // 退出登录
  function logoutPage() {
    storage.setCache("isLoging",false);
    router.push('/login');  
  }  
  return { bgmusic,isActive,playAudio, logoutPage, x,y ,isLoging}
})
