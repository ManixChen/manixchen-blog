import { ref,toRef } from 'vue'
import { defineStore } from 'pinia'
import { useScroll  } from "@vueuse/core";

export const useIndexStore = defineStore('index', () => {
  const isActive = ref(false)
//   音乐播放
  const isPlay = ref(false) 
  const {  x, y } = useScroll(window)
  // 音乐播放
  function playAudio(bgmusic) {
    bgmusic = toRef(bgmusic)
    // console.warn(bgmusic)
    if (isPlay.value) {
      bgmusic.value.pause()
      isPlay.value = false
    } else {
      bgmusic.value.play()
      isPlay.value = true
    }
  }   
  return { isActive,playAudio, x,y }
})
