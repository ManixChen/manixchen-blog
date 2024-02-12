<script setup>
import { testAPI } from "@/api/testApi"; 
// 测试天气接口
testAPI().then((res) => {
  console.warn(res);
});
</script>

<template>
    <div>
        <h1>登录页</h1>
    </div>
</template>