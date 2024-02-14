<script setup>
import SecondTitle from "../Layout/component/SecondTitle.vue";
</script>


<template>
  <div>
    <SecondTitle :title="`Works`" />

    <!-- 切换相册模块 -->
    <el-row class="works-container">
      <el-col :sm="24">
        <div class="positon-right sub-menu">
          <RouterLink to="/works/allworks">ALL</RouterLink>
          <RouterLink to="/works/webdev">WEB</RouterLink>
          <RouterLink to="/works/javadev">JAVA</RouterLink>
          <RouterLink to="/works/phpdev">PHP</RouterLink>
          <RouterLink to="/works/uidesign">UI</RouterLink>
        </div>
        <!-- 三级路由 -->
        <RouterView />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.works-container {
  .sub-menu {
    a {
      margin: 0 15px;
      color: rgb(68, 86, 108);
      font-weight: bold;
      &:hover,&.active {
        color: #fa5252;
      }
    }
  }
}
</style>