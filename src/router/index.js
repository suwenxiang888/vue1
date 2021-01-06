import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import puppy from '@/components/puppy'
import oil from '@/components/oil'
import main_search from '@/components/main_search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
 {
      path: '/main',
      name: 'main',
      component: main
    },
 {
      path: '/puppy',
      name: 'puppy',
      component:puppy
    },
 {
      path: '/oil',
      name: 'oil',
      component:oil
    },
 {
      path: '/main_search',
      name: 'main_search',
      component:main_search
    }
  ]
})
