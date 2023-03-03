import {
    createRouter,
   // createWebHistory,
    createWebHashHistory
  } from 'vue-router'
  
  const routerHistory = createWebHashHistory()
  
  import HomePage from "./pages/theHome"
  import AboutPage from "./pages/theAbout"
  import NotFoundPage from "./pages/notFound"
  //import Item from './pages/itemAlias'
  const routers = createRouter({
    history: routerHistory,
    routes: [
      {
        path: "/",
        name: "theHome",
        component: HomePage
      },
      {
        path: "/about",
        name: "theAbout",
        component: AboutPage
      },
      
      {
        path: "/*",
        name: "404",
        component: NotFoundPage,
      
      }
    ]
  })
  
  export default routers
  