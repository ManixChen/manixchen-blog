import { ref, } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  const isActive = ref(false)
  

  return { isActive }
})
