import Vue from 'vue'
import vueFixedOverFlow from 'vue-fixed-overflow/index.js'
import '../../styles/index.scss'
import App from './app.vue'

Vue.use(vueFixedOverFlow)

new Vue({
  name: 'admin',
  render: createElement => createElement(App)
}).$mount('#app')
