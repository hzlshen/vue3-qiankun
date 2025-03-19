// import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 确保子应用有自己的路由配置，并且是独立的 VueRouter 实例。
import store from './store' // 同理，确保有独立的 Vuex store（如果使用）或任何其他状态管理库。
import { createRouter, createWebHashHistory } from 'vue-router'; // 根据需要引入 Vue Router 和 History 模式。
 
// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

renderWithQiankun(
  {
      bootstrap: () => {
          console.log('[vue] vue app bootstraped');
      },
      mount: (props: QiankunProps) => {
          console.log('[vue] props from main framework', props);
          render(props);
      },
      unmount: (props: QiankunProps) => {
          window.console.log('unmount', props);
          app.unmount();
      },
      update: (props: QiankunProps) => {
          window.console.log('update');
      }
  }
)