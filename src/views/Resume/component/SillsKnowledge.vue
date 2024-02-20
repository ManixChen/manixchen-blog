<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
// import { ChatLineRound ,MoreFilled,StarFilled  } from "@element-plus/icons-vue";
import { useCommonStore } from "@/stores/common";
import EmploymentHistory from "./EmploymentHistory.vue";
import Projects from "./Projects.vue";
const commonStore = useCommonStore();
const { Skills, Knowledges } = storeToRefs(commonStore);
const { percentColor } = commonStore;
// const loading = ref(true);

// 模拟骨架屏
// async function fetchData() {
//   // 模拟异步数据加载
//   await new Promise(resolve => setTimeout(resolve, 3000));
//   loading.value = false;
// }
onMounted(() => {
  // 在组件挂载后调用异步函数
  // fetchData();
});
</script>
 

<template>
  <el-row class="skills-container">
    <el-col :sm="24" :md="12">
      <h1 class="title">Working Skills</h1>
      <div class="sill-item" v-for="(item, key) in Skills" :key="key">
        <p>
          {{ item.title }}
        </p>
        <el-progress
          :percentage="item.percentage"
          :stroke-width="18"
          striped
          striped-flow
          :color="item.color"
        />
      </div>
    </el-col>

    <el-col :sm="24" :md="12" class="knowledges-box">
      <h1 class="title">Knowledges</h1>
      <strong v-for="(item, key) in Knowledges" :key="key">
        <el-badge
          :value="item.percentage"
          :max="100"
          :type="percentColor(item.percentage)"
        >
          <el-button>{{ item.title }}</el-button>
        </el-badge>
      </strong>
    </el-col>
    <el-col :sm="24">
      <br />
    </el-col>
    <!-- 工作经历 -->
    <EmploymentHistory />

    <!-- 项目经历 -->
    <Projects />

    <!-- 模拟骨架屏测试
    <el-skeleton :rows="6" animated :loading="loading">
      <template #default1>
        <el-skeleton-item v-for="item in 4" :key="item" variant="h3" />
        <el-skeleton-item v-for="item in 4" :key="item + 4" variant="text" />
      </template>
    </el-skeleton> -->
  </el-row>
</template>

<style lang="scss">
.skills-container {
  margin-top: 10px;
  .sill-item {
    max-width: 450px;
  }
  .knowledges-box {
    strong {
      display: inline-block;
      margin: 15px 15px 0 0;
    }
  }
  /**
    .el-timeline-item__tail{
      top: 0;
      right: -20px;
      left: auto;
    }
    .el-timeline-item__node--normal{
      right: -25px;
      left: auto;
    }**/
}
</style>