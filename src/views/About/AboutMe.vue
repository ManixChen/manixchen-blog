<script setup>
 import {
  Iphone, Location,Calendar,ChatLineRound,Loading
} from "@element-plus/icons-vue";
</script>
<template>
    <el-row  > 
        <el-col  :sm="24" :md="12" :lg="8">
          <div class="left-img"> 
            <el-image  src="/src/assets/manix1.jpg" lazy  fit="cover">
              <template #error>
                <div class="image-slot">
                  <el-icon><Loading /></el-icon>
                </div>
              </template>
            </el-image>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="16">
          <h2>Who Am I?</h2>
          <p>
            Hello there! My name is ManixChen. I am a web designer & developer, and I'm very passionate and dedicated to my work.
  
            With 7 years experience as a professional a Web developer, 
            I have acquired the skills and knowledge necessary to make your project a success. 
            I enjoy every step of the design process, from discussion and collaboration.
          </p>
          <el-row>
            <el-col :sm="24"  >
              <h1 class="title">Personal Info</h1>
            </el-col>
            <el-col :sm="6" :md="18" :lg="20" class="about-icon-box">
              <el-row>
                <el-col :sm="24" :md="12"  > 
                  <div class="icon-info-box">
                    <div class="left-icon"><el-icon><Iphone /></el-icon></div>
                    <div class="right-text">
                      <div>Phone</div>
                      <strong>+86 17822437524</strong>
                    </div>
                  </div>
                </el-col> 
                <el-col :sm="24" :md="12" >
                  <div class="icon-info-box">
                    <div class="left-icon"><el-icon><ChatLineRound /></el-icon></div>
                    <div class="right-text">
                      <div>Email</div>
                      <strong>manixchensunshine@163.com</strong>
                    </div>
                  </div>
                </el-col>
                <el-col :sm="24" :md="12" >
                  <div class="icon-info-box">
                    <div class="left-icon"><el-icon><Location /></el-icon></div>
                    <div class="right-text">
                      <div>Location</div>
                      <strong>WuHan HuBei</strong>
                    </div>
                  </div>
                </el-col>
                <el-col :sm="24" :md="12" >
                  <div class="icon-info-box">
                    <div class="left-icon"><el-icon><Calendar /></el-icon></div>
                    <div class="right-text">
                      <div>Birthday</div>
                      <strong>JAN 01,1995</strong>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
</template>



