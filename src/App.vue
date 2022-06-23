<template>
  <!-- 这个地方应该是根据路由模块来决定显示什么
      router-view就是根据路径来显示内容
    -->
  <router-view></router-view>
</template>
<script setup>
import { provide, ref } from "vue";
//定义了一个变量
const baseURL = ref("http://www.softeem.xin:9999");
// 将这个变量注入到了程序当中
provide("baseURL", baseURL);
</script>

<style>
@import url("https://at.alicdn.com/t/font_3453813_cnnb1gpc03o.css");

* {
  margin: 0;
  padding: 0;
  /* 取消移动端点击以后的高亮效果 */
  -webkit-tap-highlight-color: transparent;
}
#app {
  /* vw全称叫viewport width */
  width: 100vw;
  height: 100vh;
}
</style>