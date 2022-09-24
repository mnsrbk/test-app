import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import './assets/scss/app.scss'
import Badge from './components/base/Badge'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.component('Badge', Badge)

new Vue({
  render: h => h(App),
}).$mount('#app')
