<style>
body{
    height: 100%;
    overflow-y: auto;
}
</style>
<template> 
  <div>
     <div>
  <!--    输入：nums = [2,7,11,15], target = 9 输出：[0,1] 解释：因为 nums[0] +
      nums[1] == 9 ，返回 [0, 1] 。
    </div>
    <hr /> 
    <div ref="">
      <h4>nums = {{ arr }}, target = {{target}}</h4>
      <h4>输出：下标</h4>
      <hr /> -->
      <!-- <h3>
        {{newArr}}
      </h3> -->
      <!-- <p v-for="(item,key) in 100" :key="key">{{key+":" +item}}</p> -->
    </div>
  </div>
</template>


<script>
export default {
  data:() => {
    return{
        isAdgust: true,
        arr: [],
        target: 0,
        newArr: [],
    }
  },
  methods: {
    checkIndex: function (arr, target) {
        this.arr = arr;
        this.target = target;
        this.newArr = [];
        for(let i = 0; i < arr.length; i++){
            for(let j = 1;j<=arr.length;j++){
                if(arr[i]+arr[j]===target){
                    this.newArr.push([i,j]);
                }
            }
        }
      this.isAdgust = false;
      console.warn(this.newArr);
    },
    listenWheel:function (){
        const element = window; 
        element.addEventListener('wheel', function(event) {
        // event.deltaY 的值为正时，表示向下滚动
        // event.deltaY 的值为负时，表示向上滚动
        if (event.deltaY < 0) {
            console.log(element.__proto__);
            console.log(window.scrollY);
            console.log('滚轮向上滚动'+element.scrollTop);
        } else if (event.deltaY > 0) {
            console.log('滚轮向下滚动');
        }
        }); 
    }
  },

  beforeCreate() {
    console.log("子组件————beforeCreate...");
  },
  created() {
    console.log("子组件————create...");
  },
  beforeMount() {
    console.log("子组件————beforeMount...");
  },
  mounted() {
    console.log("子组件————mounted...");
    /**
             * 
            输入：nums = [2,7,11,15], target = 9
            输出：[0,1]
            解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。*/
    this.checkIndex([2, 3, 5, 6, 7, 4, 5, 6, 9], 8);
    this.listenWheel();
  },
  beforeUpdate() {
    console.log("子组件————beforeUpdate...");
  },
  updated() {
    console.log("子组件————updated...");
  },
  beforeUnmount() {
    console.log("子组件————beforeUnmount...");
  },
  unmounted() {
    console.log("子组件————unmounted...");
  },
};
</script>