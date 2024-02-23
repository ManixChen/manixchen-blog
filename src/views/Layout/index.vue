<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import {
  User,
  House,
  Document,
  View,
  ChatDotSquare,
  Headset,Top
} from "@element-plus/icons-vue";
import { useIndexStore } from "@/stores/index";
import logo from"/public/logo.png"
import logoWhite from"/public/logo-white.png"
const indexstore = useIndexStore();
const { bgmusic,  y } = storeToRefs(indexstore);
// computed(()=>bgmusic)
</script>

 
<template>
  <div class="router-conter bg-pink-img">
    <header :class="{ fixedTop: y > 150 }">
      <nav class="just-center">
        <img  :src="y>60?logoWhite:logo" alt="">
        <RouterLink to="/home"     ><el-icon><House /></el-icon>Home</RouterLink
        >
        <RouterLink to="/about"
          ><el-icon><User /></el-icon>About</RouterLink
        >
        <RouterLink to="/resume"
          ><el-icon><Document /></el-icon>Resume</RouterLink  >
          <!-- 暂时用于blog场景的不需要公司信息 -->
        <!-- <RouterLink to="/works" ><el-icon><Reading /></el-icon>Works</RouterLink > -->
        <!-- <RouterLink to="/blogs" ><el-icon><View /></el-icon>Blogs</RouterLink  > -->
          <a href="https://manixchen.github.io/category/" target="_blank"><el-icon><View /></el-icon>Blogs</a> 
        <RouterLink to="/contact"
          ><el-icon><ChatDotSquare /></el-icon>Contact</RouterLink
        >
        <RouterLink to="/login">Login</RouterLink>
      </nav>
      <span id="musicBg" @click="indexstore.playAudio">
        <el-icon><Headset /></el-icon>
        <audio ref="bgmusic"  v-show="false">
          <source src="../../assets/music/miss.m4a" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </span>
    </header>
    <!-- 二级路由出口 -->
    <div class="main-container">
      <RouterView />
      <div class="footer-copyright">
        © 2024 All Rights Reserved by Manixchens use Vue3 and elementplus
      </div>
      
      <img style="display: none;"  :src="y>60?logo:logoWhite" alt="">
    </div>
    

    <!-- 返回顶部 -->
    <el-backtop :bottom="100">
      <div  style=" 
          text-align: center;
          line-height: 40px;
          color: #1989fa; "   >
        <el-icon><Top /></el-icon>
      </div>
    </el-backtop>
  </div>

</template>

<style lang="scss" >
body {
  &::after {
    display: inline-block;
    clear: both;
  }
}
.btn-drop-menu {
  font-size: 1.8rem;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  position: fixed;
  right: -80px;
  top: 38px;
  &.active {
    transform: translateX(-230px);
    transition: all 1s;
  }
}
#musicBg {
  position: absolute;
  z-index: 19;
  right: 50px;
  top: 36px;
  cursor: pointer;
  width: 42px;
  height: 42px;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 2em;
  line-height: 40px;
  text-align: center;
  background-color: #ff57a3;
  /**
  background: url('../../assets/imgs/music_note_big.png');**/
  i {
    color: #fff;
    transform:scale(0.6)  rotate(180deg);
    animation: spin 1s infinite linear;
    @keyframes spin {
      100% {
        transform:scale(0.6) rotate(360deg);
      }
    }
    transition: all 2s;
    padding-top: 6px;
  }
  audio {
    display: hidden;
  }
}
.router-conter {
  margin-bottom: 30px;
  //position: fixed;
  height: 100%;
  //width: 100%;
}
.bg-pink-img {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-image: url("../../assets/imgs/page-bg-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.just-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.align-center {
  text-align: center;
}
.positon-right{
  float: right;
  &::after{
    content: "";
    display: table;
    clear: both
  }
}
header {
  padding-top: 30px;
  a {
    background: #fff;
    transition: 0.3s;
    height: 40px;
    line-height: 40px;
    padding: 0 19px;
    min-width: 6rem;
    color: rgb(68, 86, 108);
    text-decoration: none;
  }
}
.main-container {
  width: 100%;
  min-height: 400px;
  margin: 30px auto;
  position: relative;
  padding-top: 30px;
  padding: 30px;
  border-radius: 20px;
  background: #fff;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  h1 {
    margin: 30px 0 15px 0;
  }
}
.page-second-title {
  font-size: 36px;
  margin: 30px 0 45px 0;

  &:after {
    content: "";
    display: inline-block;
    height: 3px;
    width: 200px;
    transform: translatey(-9px) translateX(30px);
    transition: all;
    background: #fa5252;
    background: linear-gradient(97deg, #fa5252, #dd2476);
  }
}
.footer-copyright {
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.3);
}

@media screen and (min-width: 961px) {
  header {
    a {
      border-radius: 8px;
      display: inline-block;
      &:not(&:first-child) {
        margin-left: 15px;
      }
      &.router-link-exact-active,
      &.active,
      &:hover {
        background-image: linear-gradient(
          97deg,
          rgb(250, 82, 82),
          rgb(221, 36, 118)
        );
        color: #fff;
      }
      i {
        margin-right: 3px;
        vertical-align: middle;
        transform: translateY(-2px);
        transition: all;
      }
    }
    &.fixedTop {
      nav {
        background: hsl(14, 100%, 53%);
      }
    }

    &.fixedTop {
      padding-top: 0;
      position: fixed;
      top: 0;
      z-index: 100;
      transition: all;
      nav {
        position: fixed;
        width: 100%;
        z-index: 10000;
        padding: 15px;
      }
    }
    + .main-container {
      margin-top: 100px;
    }
  }
}


/***
 * @Author: Manixchens
 * @Date: 2021-05-27 14:00:00
 * @Last Modified by: Manixchens
 * @Last Modified time: 2021-05-27 14:00:00
 屏幕尺寸小于960px基本就是移动端情况，特殊处理样式
**/
@media screen and (max-width: 960px) {
  .main-container {
    max-width:85%;
    
  }
  header {  
    border-radius: 15px;
    nav {
      display: flex;
      flex-wrap: wrap;
      a {
        flex-basis: 88%;
        &.router-link-exact-active,&:hover{
          background-image: linear-gradient(97deg, rgb(250, 82, 82), rgb(221, 36, 118));
          color: #fff;
        }
        &:first-child{
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }
        &:last-child{
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
        }
      }
    }
  }
}


@media screen and (min-width: 961px) and (max-width: 1366px) {
  .main-container {
    max-width: 90%;
  }
}


@media screen and (min-width: 1367px) {
  .main-container {
    max-width: 80%;
  }
}
</style>
 