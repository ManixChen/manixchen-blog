<script setup>
import { ref } from "vue";
import { nextTick, onMounted } from "vue";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";


const es6Studys = ref([]);

const selectItem = (e)=>{ 
    console.log(e.target.nodeName)
    const elemDom = e.target.nodeName==="h3".toUpperCase()?e.target?.getAttribute("data-id"):e.target.parentNode?.getAttribute("data-id"); 
    console.warn(elemDom);
}



onMounted(() => {
  const gitalk = new Gitalk({
    clientID: "f7c5d9acf154e373d8eb",
    clientSecret: "475dbefe630689c0e3cf2de79bd74751fd014d9c",
    repo: "blog_content", // The repository of store comments,
    owner: "manixchen",
    admin: ["manixchen"],
    id: location.pathname, // Ensure uniqueness and length less than 50
    distractionFreeMode: false, // Facebook-like distraction free mode
    appendElem: false, // Facebook-like distraction free mode
  });

  nextTick(function () {
    if (gitalk.appendElem) {
      gitalk.render("gitalk-container");
    }
  });


  const randomStudys = () => {
    const result = [];
    console.time();
    console.log("开始渲染---");
    for (let i = 0; i < 11100; i++) {
      result.push({
        id: i,
        title: `title${i}`,
        content: `content${i}`,
        author: `author${i}`,
        date: `2021-01-01 lorem ${i}: ${new Date()}`,
      });
    }
    console.timeEnd();

    return result;
  };
  es6Studys.value = randomStudys();
});
</script>


<template>
  <div>
    <h1>日志</h1>
    <div class="manix-box" @click="selectItem">
      <div v-for="(item, key) in es6Studys" :key="key">
        <h3 :data-id="key">
          {{ item.title }} {{ key }}
          <span>{{ item.date }}</span>
        </h3>
      </div>
    </div>

    <div class="blog_content_container" id="gitalk-container"></div>
  </div>
</template>


<style>
.blog_content_container {
  height: 300px;
  width: 800px;
  border-radius: 1px solid #303030;
}

.manix-box {
  min-height: 300px;
  width: 600px;
  max-height: 600px;
  overflow-y: auto;
  border: 2px solid #303030;
  border-radius: 8px;
  margin: 0 auto;
}

.manix-box h3 {
    display: inline-block;
  height: 30px;
  line-height: 30px;
  border: 1px dashed #ddd;
  margin: 10px;
  cursor: pointer;
}
</style>