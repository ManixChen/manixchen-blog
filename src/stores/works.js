import { ref ,computed} from 'vue'
import { defineStore } from 'pinia'

export const useWorksStore = defineStore('works', () => {
    const allimgs = [
        {src:"/src/assets/imgs/lunbo/project_anli_01.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/project_anli_02.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/project_anli_03.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/project_anli_04.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_01.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_02.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_03.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_04.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_05.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_06.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_07.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_08.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_09.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/vesystem_10.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/anzhi_01.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/anzhi_03.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/anzhi_04.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/anzhi_05.png",title:"",desc:""},
        {src:"/src/assets/imgs/lunbo/anzhi_02.png",title:"",desc:""},
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

    // 获取对应的图片给路由
    const checkCurrent = (current) => {
        console.warn(current) 
        if(!current){
            return true;
        }
        if(current=="all"){
            return true; 
        }
        if(current=="phpdev"){
            return true; 
        }
        if(current=="javadev"){
            return true; 
        }
    }

  return { allimgs,webImgs,imgs,checkCurrent}
})
