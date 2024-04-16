<script setup>
import { nextTick, onMounted} from "vue";
import { useWorksStore } from "@/stores/works";
import { storeToRefs } from "pinia";
const worksStore = useWorksStore();
const { webImgs, imgs } = storeToRefs(worksStore);

// 获取当前项目类型
const { current } = defineProps(["current"]);
onMounted(() => {
  nextTick(worksStore.checkCurrent(current));
});
</script>
<template>
  <div>
    <el-row class="webdev-container" justify="center" :gutter="20">
      <el-col :sm="24">
        <el-row >
            <el-col
              :sm="11"
              :md="7"
              :offset="1"
              v-for="(img, key) in webImgs"
              :key="key"
            >
              <div :class="`icon-info-box ${key % 2 ? 'bg-pink' : 'whiteaqua'}`">
                <el-image
                  lazy
                  loading="lazy"
                  fit="cover"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="imgs"
                  previewTeleported
                  :initial-index="key"
                  closeOnPressEscape
                  :src="worksStore.getImgUrl(img.src)"
                  :title="img.title"
                />
               <div>
                <p>{{ img.title }}</p>
                <strong>{{ img.desc }}</strong>
               </div>
              </div>
            </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.webdev-container {
  &::after {
    display: block;
    clear: both;
    content: ""; 
    height: 0;
  }
  .icon-info-box {
    border-radius: 25px;
    text-align: center;
    margin-bottom: 25px; 
    display: block; 
    padding: 10px;
    .el-image {
      display: block;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 80%;
        &:hover{
          
          transform: scale(1.5);
          transition: all 1s    ;
        }
      }
      &:hover{
        
        transform: scale(1.5);
        transition: all 1s    ;
      }
    } 
  }
}
</style>