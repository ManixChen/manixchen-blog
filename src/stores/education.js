import { ref } from 'vue'
import { defineStore } from 'pinia' 

export const useEducationStore = defineStore('education', () => {  
    const experiences = ref([
        {
           name:"武汉理工大学网络教育学院",
           education:"本科",
           department :"计算机工程系",
           timestamp:"2018.09---------2022",
           experience:["自学JSP、serverlet、ssm、ssh、springboot、django、thinkphp",
           "学习bootstrap3和bootstrap4源码，在基础上使用Sass 自定义多套主题",
           "对 npm,cnpm,pnpm更加升入了解，学习git常见的命令方便协同办公",
           "学习禅道BUG缺陷管理系统，熟练使用Postman进行接口测试 ",
           "学习python搭建简单的接口自动化测试工具",
           "使用VUE2,VUE3开发所有项目。优化项目模块",
           "学习linux运维搭建微服务架构",
           "经常重构github上开源项目（OpenStack，mall商城，gitpage等）",
        ], 
        }, 
        {
           name:"湖北工业职业技术学院",
           education:"大专",
           department :"汽车工程+计算机应用",
           timestamp:"2013.09---------2016.08",
           experience:["自学Html5、Css3、JavaScript、JQ、Ajax、canvas、BootStrap、PHP等WEB前端开发技术",
           "自学PS,AI,AXURE，学习网络运维Vmware，Apache搭建java，php容器自己写简单的接口",
           "在bootstrap2基础上使用Less 自定义主题 ",
           "购买阿里云域名并去备案中心备案，使用WordPress制作个人博客 ",
           "在校期间获得过奖学金，曾担任红十字会组织部部长，组织过去敬老院做义工。 大学期间自学并重写学院官网，自己实现爱奇艺土豆网等视频网站",
            
        ], 
        }, 
      ])
    
    return {experiences}
})