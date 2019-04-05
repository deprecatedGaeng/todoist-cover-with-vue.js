import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMoment from 'vue-moment'
import _ from 'lodash'

Vue.config.productionTip = false
Vue.use(VueMoment)
Vue.use(_)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
