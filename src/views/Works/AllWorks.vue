<template>
  <el-row> 
    <el-divider />
    <!-- 固定不变的 -->
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <el-divider />
    <!-- 工作经历 -->
    <EmploymentHistory /> 
    <!-- 项目经历 -->
    <Projects />
  </el-row>
</template>

<script setup>
import { StarFilled } from "@element-plus/icons-vue";

import EmploymentHistory from "../Resume/component/EmploymentHistory.vue";
import Projects from "../Resume/component/Projects.vue"; 
</script>