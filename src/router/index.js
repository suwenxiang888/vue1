import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import puppy from '@/components/puppy'

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
    }
  ]
})
