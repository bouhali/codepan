import './polyfill'
import Vue from 'vue'
// @ is the path to `./src` folder
import App from '@/components/App'
import router from '@/router'
import store from '@/store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
