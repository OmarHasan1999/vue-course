import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{
        title: "Home"
      },
      component: HomeView
    },
    {
      path: '/about',
      meta:{
        title: "About"
      },
      name: 'about',
      component: () => import('../views/aboutPage.vue')
    },
    
    {
      path: "/projects/:userId/:userName",
      name: "Projects",
      meta:{
        title: "Projects"
      },
      children:[
        {
          path: "cssLessons",
          name: "cssLessons",
          component: () =>
            import("../views/cssLessons.vue"),
        },
        {
          path: "pythonLessons",
          name: "pythonLessons",
          component: () =>
            import("../views/pythonLessons.vue"),
        }
      ],
      component: () =>
        import("../views/ProjectsView.vue"),
    },
    
    {
      
        path: "/detail/:theTitle/:thePrice/:theImg",
        name: "detail",
        component: () =>
          import("../views/detailPage.vue"),
      
    },
    {
      
      path: "/:pathMatch(.*)*",
      name: "pageNotFound",
      component: () =>
        import("../views/pageNotFound.vue"),
    
  }
  ]
});

router.beforeEach((to) => {
  document.title = to.name
})

export default router
