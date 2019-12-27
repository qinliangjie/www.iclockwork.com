import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import produce from '@/components/produce'
import aboutUs from '@/components/aboutUs'
import recruitment from '@/components/recruitment'
import contactUs from '@/components/contactUs'
Vue.use(Router)

var router = new Router({
  linkActiveClass: 'active', 
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/index',
      name: '首页',
      component: index
    },{
      path:'/produce',
      name:'产品页',
      component:produce

    },{
      path:'/aboutUs',
      name:'關於我們',
      component:aboutUs
    },{
      path:'/recruitment',
      name:'人才招聘',
      component:recruitment
    },{
      path:'/contactUs',
      name:'聯係我們',
      component:contactUs
    }
  ]
  
})

export default router;