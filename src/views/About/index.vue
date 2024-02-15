<template>
  <div class="about container-box">
    <SecondTitleVue :title="`About Me`"/>
    <!--About Me  -->
    <AboutMe />
    
    <!-- What I do -->
    <WhatIDo/>

    <!-- 去过的公司 -->
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>  
import SecondTitleVue from "../Layout/component/SecondTitle.vue";
import AboutMe from "./AboutMe.vue";
import WhatIDo from "./WhatIDo.vue";
</script>
<style lang="scss">
.left-img img{
  width: 100%;
  max-width: 350px;
  border-radius: 30px;
}
@media screen and (max-width:960px) {
  .left-img{
    text-align: center;
  }
}
.image-slot{
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #FC156A;
  font-size: 3rem;
}

.icon-info-box{
  margin-right: 15px;
  padding: 10px;
  border-radius: 15px;
  min-width: 350px;
  .left-icon{
    display:  inline-block;
    width: 1.8rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    font-size: 1.3rem;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 0.3rem;
    color: rgb(233, 59, 129);
  }

  .right-text{
    margin-left: 10px;
    display: inline-block;
    font-size: 1rem;
    div{
      padding-bottom: 5px;
      opacity: 0.6;
    }
  }
}
.what-do-container{
  .icon-info-box{
    margin-bottom: 15px;
  }
  .purple{
    color: rgba(213,102,255,1);
  }
  .left-icon{ 
    width: 60px;
    font-size: 3.6rem;
    vertical-align: top;
    background: none;
    border-color: transparent transparent transparent;
  }

  .right-text{ 
    max-width: 70%;
    strong{
      padding-top: 10px;
      font-size: 1.2rem;
    }
    p{ 
      opacity: 0.6;
    }
  }
}
</style>
