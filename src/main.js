import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.use(Bootstrap);