import { ref,onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()
export const useHomeStore = defineStore('home', () => {
  const isActive = ref(false)
  onMounted(()=>{
    console.warn("onMounted")
    setTimeout(()=>{
      console.warn("router-push")
      router.push({
        name: "webdev",
      })
    },3000)

  })
  return { isActive }
})
