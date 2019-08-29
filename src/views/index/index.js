import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vElementTableHeader from 'v-element-table-header'
import 'v-element-table-header/lib/main.css'
import App from './app.vue'

Vue.use(ElementUI)
Vue.use(vElementTableHeader)

new Vue({
  name: 'admin',
  render: createElement => createElement(App)
}).$mount('#app')
