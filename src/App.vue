<script setup>
import { RouterLink, RouterView } from "vue-router";
// 基于断点的隐藏类#
// Element Plus 额外提供了一系列类名，用于在某些条件下隐藏元素。 这些类名可以添加在任何 DOM 元素或自定义组件上。 
import 'element-plus/theme-chalk/display.css'
</script>

<template  > 
    <div>  
      <header> 
        <div class="wrapper"> 
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/">About</RouterLink>
            <RouterLink to="/">Resume</RouterLink>
            <RouterLink to="/">Works</RouterLink>
            <RouterLink to="/">Blogs</RouterLink>
            <RouterLink to="/">Contact</RouterLink>
            <RouterLink v-if="false" to="/login">Login</RouterLink>
          </nav>
        </div>
      </header>  
      <RouterView />
    </div> 
 
</template>

<style lang="scss" scoped> 
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border: 2px solid $danger;
}
</style>
