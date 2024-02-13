<script setup>
import { RouterView } from 'vue-router';
// 基于断点的隐藏类#
// Element Plus 额外提供了一系列类名，用于在某些条件下隐藏元素。 这些类名可以添加在任何 DOM 元素或自定义组件上。 
// import 'element-plus/theme-chalk/display.css' 
</script>

<template  > 
  <div> 
    <!-- 一级路由出口 -->
    <RouterView />
  </div>
</template>
 
