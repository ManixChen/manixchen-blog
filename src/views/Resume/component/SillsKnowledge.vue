<script setup>
import { ref, onMounted } from "vue";
import { ChatLineRound ,MoreFilled,StarFilled  } from "@element-plus/icons-vue";
import EmploymentHistory from  "./EmploymentHistory.vue"
import Projects from  "./Projects.vue"
const Skills = ref([
  {
    title: "Web前端开发(HTML5、ES5、ES6、JQuery+、Bootstrap+)",
    color: "#f56c6c",
    percentage: 90,
  },
  { title: "Java Web+Android", color: "rgb(103, 194, 58)", percentage: 65 },
  { title: "Php Web", color: "#5185d4", percentage: 60 },
  { title: " 运维、SEO、SEM", color: "#ca56f2", percentage: 80 },
  { title: " Photoshop、AI、Canvas", color: "#ff6464", percentage: 75 },
  { title: " Primiere、AffterEffect、剪映", color: "#ff6464", percentage: 66 },
]);
// 技能
const Knowledges = ref([
  { title: "HTML5", percentage: 95 },
  { title: "ES5", percentage: 85 },
  { title: "ES6", percentage: 55 },
  { title: " VUE2", percentage: 70 },
  { title: " ElementPlus", percentage: 90 },
  { title: " Sass、Scss", percentage: 90 },
  { title: "VueX", percentage: 85 },
  { title: "JQuery", percentage: 90 },
  { title: "JQuery Mobile", percentage: 65 },
  { title: "JQuery Ajax", percentage: 85 },
  { title: "JQuery UI", percentage: 99 },
  { title: "JQuery Form", percentage: 99 },
  { title: "Bootstrap2-5", percentage: 90 },
  { title: "Less css", percentage: 90 },
  { title: " VUE3", percentage: 85 },
  { title: " VUE Router", percentage: 85 },
  { title: "Pinia", percentage: 85 },
  { title: " Primevue", percentage: 80 },
  { title: " VUEUse", percentage: 80 },
  { title: " Layui", percentage: 99 },
  { title: " BulMa ", percentage: 99 },
  { title: " MUI ", percentage: 70 },
  { title: " AmazeUI ", percentage: 80 },
  { title: " vant ", percentage: 66 },
  { title: "React AntDesign ", percentage: 25 },
  { title: "Echarts ", percentage: 85 },
  { title: "SVG ", percentage: 45 },
  { title: "Canvas ", percentage: 65 },
  { title: "JTop ", percentage: 70 },
  { title: "SSM", percentage: 55 },
  { title: "SSH", percentage: 55 },
  { title: "Spring Boot", percentage: 35 },
  { title: "Spring Cloud", percentage: 35 },
  { title: "Servlet", percentage: 50 },
  { title: "ThinkPHP", percentage: 50 },
  { title: "Django ", percentage: 50 },
  { title: "Python QT ", percentage: 65 },
  { title: "Paccsal", percentage: 70 },
  { title: "Vmware ", percentage: 90 },
  { title: "Centenos6", percentage: 80 },
  { title: "Centenos7", percentage: 80 },
  { title: "Xshell ", percentage: 99 },
  { title: "xftp  ", percentage: 99 },
  { title: "Git  ", percentage: 86 },
  { title: "SVN  ", percentage: 90 },
  { title: "Vmware ", percentage: 99 },
  { title: "Tomcat ", percentage: 99 },
  { title: "Apache ", percentage: 99 },
  { title: "Phothoshop CC ", percentage: 75 },
  { title: "UI Canvas", color: "#ff6464", percentage: 99 },
  { title: "Iconfont ", color: "#ff6464", percentage: 80 },
  { title: "SEO", percentage: 75 },
  { title: "SEM", percentage: 75 },
  { title: "SEO", percentage: 75 },
]);

const percentColor = (percent) => {
  let color = 0;
  const colors = ["primary", "success", "warning", "info", "danger"];
  if (percent >= 90) color = 4;
  else if (percent >= 70) color = 3;
  else if (percent >= 60) color = 2;
  else if (percent >= 50) color = 1;
  else color = 0;
  return colors[color];
};

// const loading = ref(true);

// 模拟骨架屏
// async function fetchData() {
//   // 模拟异步数据加载
//   await new Promise(resolve => setTimeout(resolve, 3000));
//   loading.value = false;
// }
onMounted(() => {
  // 在组件挂载后调用异步函数
  // fetchData();
});
</script>
 

<template>
  <el-row class="skills-container">
    <el-col :sm="24" :md="12">
      <h1 class="title">Working Skills</h1>
      <div class="sill-item" v-for="(item, key) in Skills" :key="key">
        <p>
          {{ item.title }}
        </p>
        <el-progress
          :percentage="item.percentage"
          :stroke-width="18"
          striped
          striped-flow
          :color="item.color"
        />
      </div>
    </el-col>

    <el-col :sm="24" :md="12" class="knowledges-box">
      <h1 class="title">Knowledges</h1>
      <strong v-for="(item, key) in Knowledges" :key="key">
        <el-badge
          :value="item.percentage"
          :max="100"
          :type="percentColor(item.percentage)"
        >
          <el-button>{{ item.title }}</el-button>
        </el-badge>
      </strong>
    </el-col> 
    <el-col :sm="24">
      <br />
    </el-col>
    <!-- 工作经历 -->
    <EmploymentHistory/>


    <!-- 项目经历 -->
    <Projects/>

    <!-- 模拟骨架屏测试
    <el-skeleton :rows="6" animated :loading="loading">
      <template #default1>
        <el-skeleton-item v-for="item in 4" :key="item" variant="h3" />
        <el-skeleton-item v-for="item in 4" :key="item + 4" variant="text" />
      </template>
    </el-skeleton> -->
    <!-- 教育经历 -->
    <el-col :sm="24">
      <h1 class="title">Education </h1>
      <el-row   justify="center">
        <el-col :md="24" :lg="12">
          <el-collapse>
            <el-collapse-item title="武汉理工大学网络教育学院" name="1" accordion> 
              <p><strong>本科</strong>计算机工程系 <span class="positon-right">2018.09---------2022</span></p>
              <p>
                1、自学JSP、serverlet、ssm、ssh、springboot、django、thinkphp <br>
                2、学习bootstrap3和bootstrap4源码，在基础上使用Sass 自定义多套主题 <br>
                3、对 npm,cnpm,pnpm更加升入了解，学习git常见的命令方便协同办公 <br>
                4、学习禅道BUG缺陷管理系统，熟练使用Postman进行接口测试 <br>
                5、学习python搭建简单的接口自动化测试工具 <br>
                6、使用VUE2,VUE3开发所有项目。优化项目模块 <br>
                7、学习linux运维搭建微服务架构 <br>
                8、经常重构github上开源项目（OpenStack，mall商城，）
              </p>
            </el-collapse-item>
            <el-divider>
              <el-icon><star-filled /></el-icon>
            </el-divider>
            <el-divider />
            <el-collapse-item title="湖北工业职业技术学院" name="2" accordion>  
              <p><strong>大专</strong>汽车工程<span class="positon-right">2013.09---------2016</span></p>
              <p>
                1、自学Html5、Css3、JavaScript、JQ、Ajax、canvas、BootStrap、PHP等WEB前端开发技术 <br>
                2、自学PS,AI,AXURE，学习网络运维Vmware，Apache  <br>
                3、在bootstrap2基础上使用Less 自定义主题  <br>
                4、购买阿里云域名并去备案中心备案，使用WordPress制作个人博客 <br>
                在校期间获得过奖学金，曾担任红十字会组织部部长，组织过去敬老院做义工。 大学期间自学加上在实验室与老师学长学习前端技术，并且负责学院官网上各个活动页面及动画的编写
              </p>
            </el-collapse-item> 
          </el-collapse>
          
        </el-col>
      </el-row>
      

    </el-col>
  </el-row>
</template>

<style lang="scss">
.skills-container {
  margin-top: 10px;
  .sill-item {
    max-width: 450px;
  }
  .knowledges-box {
    strong {
      display: inline-block;
      margin: 15px 15px 0 0;
    }
  }
  /**
    .el-timeline-item__tail{
      top: 0;
      right: -20px;
      left: auto;
    }
    .el-timeline-item__node--normal{
      right: -25px;
      left: auto;
    }**/
}
</style>