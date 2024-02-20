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
  font-size: 3.5rem;
}

.icon-info-box{
  margin-right: 15px;
  padding: 10px 0;
  border-radius: 15px;
  min-width: 350px;
  .left-icon{
    display:  inline-block;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 0.3rem;
    margin: 0.8rem 1rem 0 0;
    color: rgb(233, 59, 129);
    text-align: center;
  }

  .right-text{
    margin-left: 10px;
    display: inline-block;
    font-size: 1.8rem;
    div{
      padding-bottom: 5px;
      opacity: 0.6;
    }
  }
}

.about-icon-box .icon-info-box  .left-icon{
  i{
    font-size: 3.1rem; 
    padding: 0.4rem 0.2rem;
    border-radius: 0.2rem;
    background: rgba(255,255,255,0.6);
    border: 1px solid #e5e5e5;
    margin-top: 0.8rem;
    &:hover{ 
    background: #e5e5e5;
    border: 1px solid #dddddd;
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
    vertical-align: top;
    margin-top: 0px;
    background: none;
    border-color: transparent transparent transparent;
    i{
      
    font-size: 5rem;
    }
  }

  .right-text{ 
    max-width: 70%;
    font-size: 1.6rem;
    strong{
      padding-top: 10px;
      font-size: 2.2rem;
    }
    p{ 
      opacity: 0.6;
    }
  }
}
</style>
