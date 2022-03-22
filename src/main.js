import Vue from 'vue'
import App from './App.vue'
import {
  Message,
  Tabs,
  TabPane,
  Input,
  Button,
  Menu,
  MenuItem,
  Carousel,
  CarouselItem,
  Popover
} from 'element-ui';

import router from './router'
import store from './store'
import http from 'axios'
import '@/api/mock'

Vue.config.productionTip = false
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Input)
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Popover)

Vue.prototype.$http = http
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
