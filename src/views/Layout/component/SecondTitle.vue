<template>
    <el-row :gutter="10"> 
        <el-col :span="24">
          <h2 class="page-second-title">{{title}}</h2>
        </el-col> 
      </el-row>
</template>
<script setup>
    defineProps(["title"]) 
</script>