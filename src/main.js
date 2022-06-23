/**
 * 它是整个程序的启动入口 ，相当于java里面的main方法
 */

//第一步：我们现在是希望使用vue来创建我们的项目
// import Vue from "vue";
// Vue.createApp();

import { createApp } from "vue";

//导入App.vue，它是根组件，相当于body标签
import App from "./App.vue";

//导入路由模块
import router from "./router/index.js";

//导入全局组件page-view
import PageView from "./components/page-view.vue";

import "./assets/css/index.css";

import Vant from 'vant';
import 'vant/lib/index.css';


//第二步：创建vue的实例
const app = createApp(App);
app.use(router);

app.use(Vant);

//注册全局组件
app.component("page-view", PageView);

//第三步：用vue的实例去接管页面
app.mount("#app");