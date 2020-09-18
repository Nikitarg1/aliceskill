import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './assets/css/tailwind.css'
import 'animate.css/animate.compat.css'


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
