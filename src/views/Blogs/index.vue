<script setup> 
import {nextTick, onMounted} from "vue"
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
console.warn(1);
onMounted(() => {
    const gitalk = new Gitalk({
        clientID: 'f7c5d9acf154e373d8eb',
        clientSecret: '475dbefe630689c0e3cf2de79bd74751fd014d9c',
        repo: 'blog_content',      // The repository of store comments,
        owner: 'manixchen',
        admin: ['manixchen'],
        id: location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })

    nextTick(function(){gitalk.render('gitalk-container') })
})
</script>


<template>
    <div>
        <h1>日志</h1>
        <div class="blog_content_container" id="gitalk-container" ></div>
    </div>
</template>


<style>
.blog_content_container{
    height: 300px;
    width: 800px;
    border-radius: 1px solid #ddd;
}
</style>