<script setup> 
import SecondTitle from '../Layout/component/SecondTitle.vue';
import SillsKnowledge from './component/SillsKnowledge.vue';
import Education from  "./component/Education.vue"
</script>


<template>
    <div class="about container-box">
        <SecondTitle :title="`Resume`"/>
        <!-- 技能技术 -->
        <SillsKnowledge/>
        <!-- 教育经历 -->
        <Education/>
    </div>
</template>

<style lang="scss">

.el-collapse-item__header{
    font-weight: 400;
      line-height: 2.7px;
      font-size: 1.6rem;
  }

</style>