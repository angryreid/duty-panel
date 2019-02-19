import Vue from 'vue'
import Router from 'vue-router'
import DutyPanel from '@/components/DutyPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DutyPanel',
      component: DutyPanel
    }
  ]
})
