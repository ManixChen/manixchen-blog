<script setup>
import { computed, nextTick, onMounted } from "vue";
import { useWorksStore } from "@/stores/works";
import { storeToRefs } from "pinia";
const worksStore = useWorksStore();
const { webImgs, imgs } = storeToRefs(worksStore);

const { current } = defineProps(["current"]);
onMounted(() => {
  nextTick(worksStore.checkCurrent(current));
});
</script>
<template>
  <div>
    <el-row class="webdev-container" justify="center">
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
            fit="contain"
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
      <el-col :sm="24" :md="12"> </el-col>
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
  }
}
</style>