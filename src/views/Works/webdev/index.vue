<script setup>
import {  nextTick, onMounted } from "vue";
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
                style="height: 100%;"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="imgs"
            previewTeleported
            :initial-index="key"
            closeOnPressEscape
            :src="img.src"
            :title="img.title"
          />
          <p>{{ img.title }}</p>
          <strong>{{ img.desc }}</strong>
        </div>
      </el-col> 
    </el-row>
  </div>
</template>

<style lang="scss">
.webdev-container {
  .icon-info-box {
    border-radius: 25px;
    text-align: center;
    padding: 20px 10px;
    margin-bottom: 15px;
    /***
    position: relative;
    &:after{
        content: "";
        display: block;
        border-radius: 25px;
        text-align: center;
        width: 100%;
        height: 100%;
        margin-bottom: 15px;
        background: rgba(255, 113, 113, 0.6);
        position: absolute;
         left: 0;
        top: -15px;
        opacity: 0;
    }
    &:hover{
        transform: scale(1.2);
        transition-duration: 0.2s;
        &:after{
            margin-left: 0;
            margin-top: 15px;
            transition: 2s;
            opacity: 0.2;
        }
    }**/
  }
}
</style>