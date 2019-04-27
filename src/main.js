import Vue from 'vue'
import './plugins/vuetify'
import './plugins/VueChat'
import './plugins/Notification'
import './plugins/vue-agil'
import './plugins/vue-scrollto'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
