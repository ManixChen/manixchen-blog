import { ref } from 'vue'
import { defineStore } from 'pinia' 

export const useCommonStore = defineStore('common', () => {
  const sites = ref({ 
    github: 'https://github.com/manixchen',
    email: 'manixchensunshine@163.com',
    linkedin: '',
  }) 
  const jobs = ref([
    {
       name:"成都安宏鹏飞安科技有限公司",
       jobname:"前端开发工程师",
       timestamp:"2023/12/10",
       projecs:["安智商城前端",
       "安智商城管理端",
       "安智商城微信小程序"],
       projectsTecs:["Vue3、elementplus、pinia、vuerouter、vueuse全家桶",
      "SpringBoot +Bootstrap + Jquery","Vue3 + Uni-app"]
    },
    {
       name:"**日用品有限公司天津分公司",
       jobname:"前端开发工程师",
       timestamp:"2019/08/10",
       projecs:["**云购","**易联网","**商城","活动节假日H5小游戏定制"],
       projectsTecs:["vue3、elementplus、pinia、vuerouter、vueuse","vue2、elementui、vuex、vuerouter","vue2、bulma、vuex、vuerouter","h5,css3,canvas"]
    }
    ,
    {
       name:"**科技股份有限公司",
       jobname:"Web前端全栈开发工程师",
       timestamp:"2016.04-2019.07",
       projecs:["**应用管理平台","**下一代云桌面","**超融合一体化平台","**智能数据感知分析平台","**云存储/云盘"],
       projectsTecs:["SSM + Mysql + Vue1.0 + Bootstrap + Jquery",
       "Server2012 + ThinkPhp + Bootstrap + Jquery",
       "Django + Mysql + Vue1.0 + Bootstrap + Jquery","Vue1.0 + BlumaCss + Jquery +Echarts",
       "Spring boot + Mysql + Vue1.0 + Bootstrap + Jquery"]
    }
    ,
    {
       name:"**汽车服务有限公司",
       jobname:"前端开发工程师",
       timestamp:"2015/8/2",
       projecs:["**官网","**自媒体运维"],
       projectsTecs:["jquery,phpcms","wps,易企秀"]
    }
  ])

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
    { title: "ES6", percentage: 75 },
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
  

  return { 
    sites,jobs,
    Skills,Knowledges,percentColor
  }
})
