import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { registerMicroApps,start } from "qiankun";

createApp(App).mount("#app");

registerMicroApps([
  {
    name:'sub-vue', //  名称
    entry: '//localhost:8888', // 子应用入口
    container: '#subvue-viewport', // 子应用挂载的节点
    activeRule: '/app1', // 激活规则，当路由匹配时加载子应用
  }
])

start()