<template>
  <div id="subvue-viewport"></div>
</template>

<script>
import { start } from 'qiankun'
import { registerApps } from '@/utils/qiankun'
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      registerApps()
      start({
        sandbox: {
          experimentalStyleIsolation: true // 样式隔离
        }
      })
    }
  }
}
</script>
