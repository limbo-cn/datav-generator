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
      path: '/layout',
      name: 'edit-layout',
      component: require('@/components/createComponent/editLayout').default
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: require('@/components/createComponent/showcase').default
    },
    {
      path: '/test',
      name: 'test',
      component: require('@/components/createComponent/test').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
