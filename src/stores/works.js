import { ref ,computed} from 'vue'
import { defineStore } from 'pinia'

export const useWorksStore = defineStore('works', () => {
    // 默认图集
    const allimgs = [
        {src:"/src/assets/imgs/lunbo/project_anli_01.png",title:"安利云购",desc:"WEB VUE3、elementplus、pinia、vuerouter、vueuse"},
        {src:"/src/assets/imgs/lunbo/project_anli_04.png",title:"安利易联网",desc:"WEB VUE2、elementui、vuex、vuerouter"}, 
        {src:"/src/assets/imgs/lunbo/vesystem_02.png",title:"和信下一代云桌面",desc:"PHP WEB:Server2012 + ThinkPhp + Bootstrap + Jquery"},
        {src:"/src/assets/imgs/lunbo/anzhi_01.png",title:"安智商城前端",desc:"WEB: Vue3、elementplus、pinia、vuerouter、vueuse全家桶"},
        {src:"/src/assets/imgs/lunbo/vesystem_01.png",title:"和信统一应用管理平台",desc:"Java WEB: SSM + Mysql + Vue1.0 + Bootstrap + Jquery"},
        {src:"/src/assets/imgs/lunbo/vesystem_03.png",title:"和信超融合一体化平台",desc:"Django WEB:  Mysql + Vue1.0 + Bootstrap + Jquery"},
        {src:"/src/assets/imgs/lunbo/vesystem_04.png",title:"和信智能数据感知分析平台",desc:"WEB: VUE1.0 + BlumaCss + Jquery +Echarts"},
        {src:"/src/assets/imgs/lunbo/vesystem_05.png",title:"和信云存储",desc:"java Spring boot WEB: Mysql + Vue1.0 + Bootstrap + Jquery"}, 
        {src:"/src/assets/imgs/lunbo/vesystem_06.png",title:"北京和信创天科技股份有限公司",desc:"--服务的客户--"},
        {src:"/src/assets/imgs/lunbo/vesystem_07.png",title:"北京和信创天科技股份有限公司",desc:"--服务的客户--"},
        {src:"/src/assets/imgs/lunbo/vesystem_08.png",title:"北京和信创天科技股份有限公司",desc:"--服务的客户--"},
        {src:"/src/assets/imgs/lunbo/vesystem_09.png",title:"北京和信创天科技股份有限公司",desc:"--服务的客户--"},
        {src:"/src/assets/imgs/lunbo/vesystem_10.png",title:"北京和信创天科技股份有限公司",desc:"--服务的客户--"}, 
        {src:"/src/assets/imgs/lunbo/project_anli_02.png",title:"安利云购",desc:"--登录入口--"},
        {src:"/src/assets/imgs/lunbo/project_anli_03.png",title:"安利云购",desc:"--内推注册入口，私域服务代理商注册接口，必须有代理商邀请码才行--"},
        {src:"/src/assets/imgs/lunbo/anzhi_05.png",title:"安智商城管理端",desc:"JAVA SpringBoot  WEB: VUE2  Bootstrap + Jquery"},
        {src:"/src/assets/imgs/lunbo/anzhi_04.png",title:"安智商城微信小程序",desc:"--商品购物车列表--"},
        {src:"/src/assets/imgs/lunbo/anzhi_03.png",title:"安智商城微信小程序",desc:"WEB: Vue3 + Uni-app"},
        {src:"/src/assets/imgs/lunbo/anzhi_02.png",title:"安智商城微信小程序",desc:"--登录页面--"},
    ];
    const webImgs = ref(allimgs);

    // 获取所有图片地址
    const imgs =computed(() => {
        const newImgs = [];
        for(let i=0;i<webImgs.value.length;i++){
            newImgs.push(webImgs.value[i]['src']);
        }
        return newImgs
    })

    /***
     * @param {String} current 当前模块
     * @param {Number} start 开始位置
     * @param {Number} end 结束位置
     * @param {String} cloum 排序字段
     * @param {String} str 关键词(根据关键词检索,目前仅支持相连的字符)
     * @return {Boolean}   终止情况 
     */
    const checkCurrent =(current,start=0,end=0,cloum = "desc",str=null)=>{ 
        if( !current)current="web";
        // 所有项目
        if(current=="all"){  
            webImgs.value = allimgs;
            return false;
        }
        //只获取指定位置的 
        if(start&&end){
            arr = webImgs.value.slice(start,end); 
            webImgs.value = arr;
            return false;
        }

        // 搜索内容没有指定就强制用当前模块来查找  
        if(!str)str=current;
        let arr = [];
        // 只要具备搜索条件和关键词就用属性查找
        if(cloum&&str&&current){
            str = str.toUpperCase();
            for(let i=0;i<allimgs.length;i++){ 
                if( allimgs[i][cloum].toUpperCase().indexOf(str)!==-1){
                    arr.push(allimgs[i]);
                }
            }
            webImgs.value = arr;
            return false;
        }
        // 避免请求数据为空，查询失败返回所有
        webImgs.value = allimgs;
    } 

  return { allimgs,webImgs,imgs,checkCurrent}
})
