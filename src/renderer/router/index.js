import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/project',
      name: 'edit-layout',
      component: require('@/components/main/project').default
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: require('@/components/main/showcase').default
    },
    {
      path: '/test',
      name: 'test',
      component: require('@/components/main/test').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
