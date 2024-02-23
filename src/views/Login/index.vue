<script>
import LoginForm from "./LoginForm.vue"
import RegisterForm from "./RegisterForm.vue"
// import { testAPI } from "@/api/testApi"; 
// // 测试天气接口
// testAPI().then((res) => {
//   console.warn(res);
// }); 
    export default {
        components: { LoginForm ,RegisterForm},   
        data() {
            return {
                isLogin: true,
            }
        },
        methods: {
        },
        beforeCreate() {
            console.log("父组件————beforeCreate...");
        },
        created() {
            console.log("父组件————create...");
        },
        beforeMount() {
            console.log("父组件————beforeMount...");
        },
        mounted() {
            console.log("父组件————mounted...");
        },
        beforeUpdate() { 
            console.log("父组件————beforeUpdate...");
        },
        updated() {
            console.log("父组件————updated...");
        },
        beforeUnmount() {
            console.log("父组件————beforeUnmount...");
        },
        unmounted() {
            console.log("父组件————unmounted...");
        }, 
    }
</script>

<template>
    <div>
        <h1>测试页面</h1>
        <LoginForm  v-if="isLogin"/>
        <RegisterForm  v-if="!isLogin"/>
    </div>
</template>