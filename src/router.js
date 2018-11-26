import Vue from 'vue'
import Router from 'vue-router'
import Ordering from './views/Ordering.vue'
// import selectionOverview from '.views/selectionOverview.vue'


Vue.use(Router)

let router = new Router({
  routes: [
   {
      path: '/',
      meta: {
        title: 'Kraft Burgers',
      },
      name: 'ordering',
      component: Ordering

   },
   {
      path: '/kitchen',
      meta: {
        title: 'Kitchen',
      },
      name: 'kitchen',
      // route level code-splitting
      // this generates a separate chunk (read.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "read" */ './views/Kitchen.vue')
   },
   // Added start route
   {
      path: '/start',
         meta: {
            title: 'Kraft Burgers',
         },
      name: 'start',
      component: () => import(/* webpackChunkName: "read" */ './views/Start.vue')
   },
   {
      path: '/selectionOverview',
         meta: {
            title: 'Selection Overview',
         },
      name: 'selectionOverview',
      component: () => import(/* webpackChunkName: "read" */ './views/selectionOverview.vue')
   },
   {
      path: '/burgerCreation',
         meta: {
            title: 'Burger Creation',
         },
      name: 'burgerCreation',
      component: () => import(/* webpackChunkName: "read" */ './views/burgerCreation.vue')
   }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
