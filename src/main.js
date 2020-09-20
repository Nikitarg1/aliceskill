import 'vuetify/dist/vuetify.min.css'
import './assets/css/tailwind.css'
import Vue from 'vue'
import App from './App.vue'
import 'animate.css/source/animate.css'
import vuetify from '@/plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
