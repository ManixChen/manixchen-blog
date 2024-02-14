<script setup>
import { ref ,onMounted} from "vue";  
 import {
  ChatLineRound
} from "@element-plus/icons-vue";
const Skills = ref([
  {title:"Web前端开发(HTML5、ES5、ES6、JQuery+、Bootstrap+)", color: '#f56c6c', percentage: 90 },
  {title:"Java Web+Android", color: 'rgb(103, 194, 58)', percentage: 65 },
  {title:"Php Web", color: '#5185d4', percentage: 60 },
  {title:" 运维、SEO、SEM", color: '#ca56f2', percentage: 80 },
  {title:" Photoshop、AI、Canvas", color: '#ff6464', percentage: 75 },
  {title:" Primiere、AffterEffect、剪映", color: '#ff6464', percentage: 66 },
])
// 技能
const Knowledges = ref([
  {title:"HTML5",  percentage: 95 },
  {title:"ES5",  percentage: 85 },
  {title:"ES6",  percentage: 55 },
  {title:" VUE2",  percentage: 70 },
  {title:" ElementPlus", percentage: 90 },
  {title:" Sass、Scss", percentage: 90 },
  {title:"VueX", percentage: 85 },
  {title:"JQuery", percentage: 90 },
  {title:"JQuery Mobile", percentage: 65 },
  {title:"JQuery Ajax", percentage: 85 },
  {title:"JQuery UI", percentage: 99 },
  {title:"JQuery Form", percentage: 99 },
  {title:"Bootstrap2-5", percentage: 90 },
  {title:"Less css", percentage: 90 },
  {title:" VUE3", percentage: 85 },
  {title:" VUE Router", percentage: 85 },
  {title:"Pinia", percentage: 85 },
  {title:" Primevue", percentage: 80 },
  {title:" VUEUse", percentage: 80 },
  {title:" Layui", percentage: 99 },
  {title:" BulMa ", percentage: 99 },
  {title:" MUI ", percentage: 70 },
  {title:" AmazeUI ", percentage: 80 },
  {title:" vant ", percentage: 66 },
  {title:"React AntDesign ", percentage: 25 },
  {title:"Echarts ", percentage: 85 },
  {title:"SVG ", percentage: 45 },
  {title:"Canvas ", percentage: 65 },
  {title:"JTop ", percentage: 70 },
  {title:"SSM", percentage: 55 }, 
  {title:"SSH", percentage: 55 }, 
  {title:"Spring Boot", percentage: 35 }, 
  {title:"Spring Cloud", percentage: 35 }, 
  {title:"Servlet", percentage: 50 }, 
  {title:"ThinkPHP", percentage: 50 }, 
  {title:"Django ", percentage: 50 }, 
  {title:"Python QT ", percentage: 65 },  
  {title:"Paccsal", percentage: 70 },  
  {title:"Vmware ", percentage: 90 }, 
  {title:"Centenos6", percentage: 80 }, 
  {title:"Centenos7", percentage: 80 }, 
  {title:"Xshell ", percentage: 99 }, 
  {title:"xftp  ", percentage: 99 }, 
  {title:"Git  ", percentage: 86 }, 
  {title:"SVN  ", percentage: 90 }, 
  {title:"Vmware ", percentage: 99 }, 
  {title:"Tomcat ", percentage: 99 }, 
  {title:"Apache ", percentage: 99 }, 
  {title:"Phothoshop CC ", percentage: 75 }, 
  {title:"UI Canvas", color: '#ff6464', percentage: 99 }, 
  {title:"Iconfont ", color: '#ff6464', percentage: 80 }, 
  {title:"SEO", percentage: 75 }, 
  {title:"SEM", percentage: 75 }, 
  {title:"SEO", percentage: 75 }, 
])

const percentColor =(percent)=>{
    let color = 0;
    const colors = ["primary", "success", "warning", "info", "danger"];
    if(percent>=90)color = 4
    else if(percent>=70)color = 3  
    else if(percent>=60)color = 2
    else if(percent>=50)color = 1
    else  color = 0;
  return colors[color];
}

const loading = ref(true);
async function fetchData() {
  // 模拟异步数据加载
  await new Promise(resolve => setTimeout(resolve, 3000));
  loading.value = false;
}
 onMounted(() => {
  
// 在组件挂载后调用异步函数
fetchData();
 })
</script>
 

<template>
    <el-row class="skills-container "> 
        <el-col :sm="24" :md="12"  >
          <h1 class="title">Working Skills</h1>
          <div class="sill-item" v-for="(item,key) in Skills" :key="key">
            <p >
              {{ item.title }}
            </p>
            <el-progress  :percentage="item.percentage" :stroke-width="18" striped striped-flow  :color="item.color" /> 
          </div> 
        </el-col> 
        
        <el-col :sm="24" :md="12" class="knowledges-box">
          <h1 class="title">Knowledges          </h1>
          <strong v-for="(item,key) in Knowledges" :key="key">
            <el-badge :value="item.percentage" :max="100" :type="percentColor(item.percentage)">
              <el-button>{{item.title}}</el-button>
            </el-badge> 
          </strong>
        </el-col>  
        <el-col :sm="24"  >
          <br> 
        </el-col>
        <el-col :sm="24" :md="12"  >
          <h1 class="title">Employment History</h1>
          <el-timeline>
            <el-timeline-item center timestamp="2023/12/10" placement="bottom" color="#0bbd87">
              <el-card>
                <h3>成都安宏鹏飞安科技有限公司</h3>  
                <h4>前端开发工程师</h4>
                <p>安智商城、安智商城管理端</p>
                <p>安智商城微信小程序</p> 
              </el-card>
            </el-timeline-item>
            <el-timeline-item center timestamp="2019/08/10" placement="bottom" color="#0bbd87">
              <el-card>
                <h3>安利日用品有限公司天津分公司</h3>
                <h4> 前端开发主管</h4>
                <p>安利云购</p>
                <p>安利易联网</p>
                <p>安利商城</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2016.04-2019.07" placement="bottom" color="#0bbd87">
              <el-card>
                <h3>北京和信创天科技股份有限公司</h3>
                <h4>Web前端全栈开发工程师</h4>
                <p>和信统一应用管理平台VEUAM</p>
                <p>和信下一代云桌面VENGD</p>
                <p>和信超融合一体化平台VEHCI</p>
                <p>和信智能数据感知分析平台VEIDP</p>
                <p>和信云存储VECLOUD</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item center timestamp="2015/8/2" placement="bottom" color="#0bbd87">
              <el-card>
                <h3>北京潇洒车汽车服务有限公司</h3>
                <h4> 网站设计实习生</h4>
                <p>网站定制开发重构</p>
                <p>自媒体运维</p>
              </el-card>
            </el-timeline-item> 
          </el-timeline>
        </el-col>  
        <!-- project -->
        <el-col :sm="24" :md="12"  >
          <h1 class="title">Project Manager</h1>
          <el-timeline>
            <el-timeline-item center timestamp="2023/12/10" placement="bottom" color="#0bbd87">
              <el-card>
                <h3>成都安宏鹏飞安科技有限公司</h3>   
                <div>
                  <p>安智商城前端：Vue3、elementplus、pinia、vuerouter、vueuse全家桶</p>
                  <p>安智商城管理端:SpringBoot +Bootstrap + Jquery </p>
                  <p>安智商城微信小程序：Vue3 + Uni-app</p> 
                </div>
              </el-card>
            </el-timeline-item>
            <el-timeline-item center timestamp="2019/08/10" placement="bottom" color="#0bbd87">
              <el-card>
                <h3>安利日用品有限公司天津分公司</h3> 
                <div>
                  <p>安利云购：vue3、elementplus、pinia、vuerouter、vueuse</p>
                  <p>安利易联网：vue2、elementui、vuex、vuerouter</p>
                  <p>安利商城：vue2、bulma、vuex、vuerouter</p> 
                  <p>活动节假日H5小游戏定制</p> 
                </div>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2016.04-2019.07" placement="bottom" color="#0bbd87">
              <el-card>
                <h3>北京和信创天科技股份有限公司</h3>
                <p>和信统一应用管理平台：SSM + Mysql + Vue1.0 + Bootstrap + Jquery</p>
                <p>和信下一代云桌面：Server2012 + ThinkPhp + Bootstrap + Jquery</p>
                <p>和信超融合一体化平台:Django + Mysql + Vue1.0 + Bootstrap + Jquery</p>
                <p>和信智能数据感知分析平台: Vue1.0 + BlumaCss + Jquery +Echarts</p>
                <p>和信云存储:Spring boot + Mysql + Vue1.0 + Bootstrap + Jquery</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item center timestamp="2015/8/2" placement="bottom" color="#0bbd87">
              <el-card>
                <h3>北京潇洒车汽车服务有限公司</h3>
                <p> 网站设计实习生</p>
              </el-card>
            </el-timeline-item> 
          </el-timeline>
        </el-col>  
         <!-- 教育经历 -->
         <el-col :sm="24" :md="12"  >
          <h1 class="title">Education</h1>
          <el-skeleton :rows="6" animated  :loading="loading" >
            <template #default1>
              <el-skeleton-item v-for="item in 4" :key="item" variant="h3" />
              <el-skeleton-item v-for="item in 4" :key="item + 4" variant="text" />
            </template>
         </el-skeleton>
          <div v-if="!loading">
            <h1>这里是实际内容</h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, itaque. Delectus earum blanditiis architecto veritatis labore ea illum explicabo. Nesciunt quae mollitia accusantium est pariatur iure placeat, ipsam ea neque!
           
          </div>
         </el-col>
      </el-row>
</template>

<style lang="scss">
.skills-container {
    margin-top: 10px;
    .sill-item{
      max-width: 450px;
    } 
    .knowledges-box{
      strong{
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