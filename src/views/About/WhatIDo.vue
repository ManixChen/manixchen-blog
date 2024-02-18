<script setup>
 import {
  Iphone, Location,ChatLineRound
} from "@element-plus/icons-vue";
</script>


<template>
    <el-row class="what-do-container">
        <el-col :sm="24"  >
          <h1 class="title">What I Do!</h1>
        </el-col>
        <el-col :sm="24" :md="12"  >
          <div class="icon-info-box bg-pink"  >
            <div class="left-icon purple"><el-icon><Location /></el-icon></div>
            <div class="right-text">
              <strong>Web Front Development</strong>
              <p>
                1、HTML5和CSS3 <br>
                2、JavaScript ES5和ES6  <br>
                3、JQuery(Ajax、UI、Form、Mobile)<br> 
                4、Bootstrap5、4、3、2 、Layui <br> 
                5、熟练掌握VUE3,VUE2 ElementPlus、Vue Argon、Primevue <br> 
                6、了解React，熟练使用 BulMa CSS、vant、AntDesign,Liquid,
              </p>
            </div>
          </div>
        </el-col> 
        <el-col :sm="24" :md="12">
          <div class="icon-info-box bg-pink">
            <div class="left-icon"><el-icon><ChatLineRound /></el-icon></div>
            <div class="right-text">
              <strong>App Development</strong>
              <p>
                1、HTML5和CSS3 媒体查询<br>
                2、Bootstrap5、4、3、2  响应式定制布局<br>
                3、JQuery Mobile移动端框架<br> 
                4、MUI、AmazeUI <br> 
                5、Bulma框架 <br>
                6、Java Android SDK<br> <br><br>
              </p>
            </div>
          </div>
        </el-col>  
        <el-col :sm="24" :md="12"  >
          <div class="icon-info-box  whiteaqua">
            <div class="left-icon"><el-icon><ChatLineRound /></el-icon></div>
            <div class="right-text">
              <strong>Java、Php、Python、Passcal</strong>
              <p>
                1、熟悉JAVA SSH、SSM、Spring Boot、Spring cloud 重写web接口<br>
                2、熟悉PHP ThinkPHP重构项目<br>
                3、熟悉Django Web定制开发项目<br>
                4、了解Mysql基础操作，擅长使用SqlYog、Navicat管理数据库<br> 
                5、熟悉Python QT界面开发<br> <br> <br> 
              </p>
            </div>
          </div>
        </el-col> 
        <el-col :sm="24" :md="12"  >
            <div class="icon-info-box  whiteaqua">
              <div class="left-icon primary"><el-icon><ChatLineRound /></el-icon></div>
              <div class="right-text">
                <strong>运维实施测试</strong> 
                <p>
                    1、Vmware、VitualBox Install Windows server、Ubuntu、Centenos …… <br>
                    2、Xshell、xftp 管理服务器<br>
                    3、能够快速部署、配置与调优Mysql、Nginx、Redis、Mongodb、Apache、Tomcat、VPN  <br> 
                    4、熟悉配置、日常管理、监控、安全、备份、恢复、故障处理、日志分析等技能 <br> 
                    5、有独立运维大型多个java web项目经历 <br>  
                    6、使用Paccsal集成打包Web服务为windows应用<br>  
                </p>
              </div>
            </div>
          </el-col> 
        <el-col :sm="24" :md="12"   > 
            <div class="icon-info-box whiteaqua">
              <div class="left-icon"><el-icon><Iphone /></el-icon></div>
              <div class="right-text">
                <strong>Ui/Ux Design</strong>
                <p>
                  1、Phothoshop CC <br>
                  2、AI illustrator <br>
                  3、Aftereffectc 高光特效<br> 
                  4、AXURE、墨刀简单使用<br> 
                  5、Canvas、AI制图 <br> 
                  6、Iconfont、svg制作 <br> 
                </p>            
              </div>
            </div>
          </el-col> 
          <el-col :sm="24" :md="12"  >
            <div class="icon-info-box  whiteaqua">
              <div class="left-icon"><el-icon><ChatLineRound /></el-icon></div>
              <div class="right-text">
                <strong>SEM、SEO 全媒体运营</strong>
                <p>
                  1、Web SEO优化<br>
                  2、小红书、抖音、哔哩哔哩、搜狐、今日头条、网易自媒体、汽车之家等<br>
                  3、微信公众平台、知乎、掘金等<br> 
                  4、社群、专栏、博客<br> <br> 
                </p>
              </div>
            </div>
          </el-col> 
      </el-row>
</template>