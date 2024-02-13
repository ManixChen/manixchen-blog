import { ref,toRef } from 'vue'
import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', () => {
  const isActive = ref(false)
//   音乐播放
  const isPlay = ref(false) 
  // 导航是否固定顶部
  const isFixed = ref(false) 

  // 音乐播放
  function playAudio(bgmusic) {
    bgmusic = toRef(bgmusic)
    console.warn(bgmusic)
    if (isPlay.value) {
      bgmusic.value.pause()
      isPlay.value = false
    } else {
      bgmusic.value.play()
      isPlay.value = true
    }
  } 

  return { isActive,isFixed,playAudio }
})
