<script setup>
import logoCircle from"/src/assets/manix2.png"
// import { testAPI } from "@/api/testApi";
// // 测试天气接口
// testAPI().then((res) => {
//   console.warn(res);
// }); 
</script>

<style lang="scss" scoped>
.icon-avtor{
  width: 240px;
  height: 240px;
  margin: 40px 0 0 0;
}
main{
  text-align: center;
}
.job-type{
  color: rgba(0,0,0,0.3);
} 
.href-container a{
    display: inline-block;
    border-radius: 8px;
    background-color:#fff;
    text-align: center;
    padding:10px;
    margin: 0 15px;
    img{
      width: 25px;
      vertical-align: middle;
    }
} 
.btn-large{
  height: 60px;
  line-height: 70px;
  a{
    padding:  0  25px;
    color: #fff;
    font-size:18px ;
  }
}
</style>


<template>
  <main>
    <div class="just-center">
      <div>
        <el-avatar class="icon-avtor"    :src="logoCircle" lazy />
      </div> 
    </div>
    
    <el-row>
      <el-col :span="24"><h1>ManixChen</h1></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><span class="job-type">Web Engineer</span></el-col>
    </el-row> 
    
    <el-row>
      <el-col :span="24">
        <br>
        <br>
        <div class="href-container">
          <a target="new" href="https://github.com/ManixChen"><img src="/src/assets/log/github.png" alt=""></a>
          <a target="new" href="https://gitee.com/manixchen"><img src="/src/assets/log/gitee.png" alt=""></a> 
          <a target="new" href="weixin://muruoqingchenan"><img src="/src/assets/log/weixin.png" alt=""></a>
          <a target="new" href="http://wpa.qq.com/msgrd?v=3&uin=&site=1183108660&menu=yes"><img src="/src/assets/log/qq.png" alt=""></a>
          <a target="new" href="mailto:manixchensunshine@163.com"><img src="/src/assets/log/youxiang.png" alt=""></a>
        </div>
      </el-col>
    </el-row> 
    <el-row>
      <el-col :span="24"> 
        <div>
          <br> 
          <br>
          <br>
          <el-button type="danger" round class="btn-large">
            <a target="new" href="/public/resume_web.pdf">Download Cv</a></el-button>
        </div>
      </el-col>
    </el-row> 
    <!-- <el-row :gutter="20">
      <el-col class="hidden-sm-and-down" :md="1" :lg="3"></el-col>
      <el-col :sm="20" :md="18" :lg="14">
        <h1>HOME</h1>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="1" :lg="3"></el-col>
    </el-row> -->
  </main>
</template>