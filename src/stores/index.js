import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useScroll  } from "@vueuse/core";

export const useIndexStore = defineStore('index', () => {
  const isActive = ref(false)
  const bgmusic = ref()
//   音乐播放
  const isPlay = ref(false) 
  const {  x, y } = useScroll(window)
  // 音乐播放
  function playAudio() {
    console.warn(bgmusic)
    if (isPlay.value) {
      bgmusic.value.pause()
      isPlay.value = false
    } else {
      bgmusic.value.play()
      isPlay.value = true
    }
  }   
  return { bgmusic,isActive,playAudio, x,y }
})
