<template>
  <div>
    <!-- <el-row>
      <EmploymentHistory title="工作经历" />
      <Projects title="项目经历" />
    </el-row>  -->
    <el-row>
      <webdev :current="`all`" title="所有相册"/>
    </el-row>
  </div>
</template>

<script setup>
// import EmploymentHistory from "../Resume/component/EmploymentHistory.vue";
// import Projects from "../Resume/component/Projects.vue";
import webdev from "./webdev/index.vue";
</script>