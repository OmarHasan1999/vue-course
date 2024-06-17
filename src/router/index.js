import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    
    {
      path: "/helpers",
      name: "helpers",
      component: () =>
        import("../views/HelpersView.vue"),
    },
    
    {
      
        path: "/composition",
        name: "composition",
        component: () =>
          import("../views/StoreComposition.vue"),
      
    }
  ]
});
/*
 router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  
  document.title = `${to.name}-MARK`;

  next()
})*/

export default router
