import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NextSevenDays from './views/NextSevenDays.vue'
import Today from './views/Today.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/nextSevenDays',
      name: 'nextSevenDays',
      component: NextSevenDays
    },{
      path: '/today',
      name: 'today',
      component: Today
    }
  ]
})
