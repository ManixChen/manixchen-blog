<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import {
  User,
  House,
  Document,
  Reading,
  View,
  ChatDotSquare,
  Headset,
} from "@element-plus/icons-vue";
import { useIndexStore } from "@/stores/index";
const indexstore = useIndexStore(); 
const { bgmusic,isFixed,y} = storeToRefs(indexstore);
</script>

 
<template> 
  <div  class="router-conter bg-pink-img" >
    <header   :class="{fixedTop:y>150}">
      <nav class="just-center">
        <RouterLink to="/"
          ><el-icon><House /></el-icon>Home</RouterLink
        >
        <RouterLink to="/about"
          ><el-icon><User /></el-icon>About</RouterLink
        >
        <RouterLink to="/resume"
          ><el-icon><Document /></el-icon>Resume</RouterLink
        >
        <RouterLink to="/works"
          ><el-icon><Reading /></el-icon>Works</RouterLink
        >
        <RouterLink to="/blogs"
          ><el-icon><View /></el-icon>Blogs</RouterLink
        >
        <RouterLink to="/contact"
          ><el-icon><ChatDotSquare /></el-icon>Contact</RouterLink
        >
        <RouterLink to="/login">Login</RouterLink> 
      </nav>
      <span id="musicBg" @click="indexstore.playAudio(bgmusic)">
        <el-icon><Headset /></el-icon>
        <audio ref="bgmusic" v-show="false">
          <source src="../../assets/music/miss.m4a" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </span>
    </header>
    <!-- 二级路由出口 -->
    <div class="main-container">
      <RouterView />
      <h5 class="footer-copyright">© 2024 All Rights Reserved by Manixchens</h5>
    </div>
  </div>
</template>


<style lang="scss" >
body{
  &::after{
    display: inline-block;
    clear: both;
  }
}
#musicBg {
  position: absolute;
  z-index: 19;
  right: 50px;
  top: 20px;
  cursor: pointer;
  width: 42px;
  height: 42px;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 2em;
  line-height: 40px;
  text-align: center;
  /**
  background: url('../../assets/imgs/music_note_big.png');**/
  i {
    transform: rotate(180deg);
    animation: spin 1s infinite linear;
    @keyframes spin {
      100% {
        transform: rotate(360deg);
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

header {
  padding-top: 30px;
  a {
    display: inline-block;
    transition: 0.3s;
    height: 40px;
    line-height: 40px;
    padding: 0 19px;
    min-width: 6rem;
    background: #fff;
    border-radius: 8px;
    color: rgb(68, 86, 108);
    text-decoration: none;
    &:not(&:first-child) {
      margin-left: 15px;
    }
    &.router-link-exact-active,
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
    padding-top: 0;
    position: fixed;
    top: 0;
    z-index: 100;
    transition: all;
    nav {
      position: fixed;
      background: hsl(14, 100%, 53%);
      width: 100%;
      z-index: 10000;
      padding: 15px;
    }
  }
  + .main-container {
    margin-top: 100px;
  }
}

@media screen and (max-width: 960px) {
  .main-container {
    max-width: 720px;
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
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.3);
}
</style>
 