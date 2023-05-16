import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'home',
    component:home,
    children:[
      {
        path: '',
        redirect:'zhaopin'
      },
      {
        path:'zhaopin',
        name:'zhaopin',
        component: () => import('../views/home/Zhaopin'),
        children:[
          {
            path:'detail/:item/:isHome',
            name:'detail',
            component:() => import('../views/home/detail/ZpDetail'),
            props({params}){
              return{
                item:params.item,
                isHome:params.isHome
              }
            }
          }
        ]
      },
      {
        path:'jianzhi',
        name:'jianzhi',
        component: () => import('../views/home/Jianzhi'),
        props({query:{items}}){
          return{items:JSON.parse(items)}
        },
        children:[ 
          {
            path:'detail2/:item/:isHome',
            name:'detail2',
            component:() => import('../views/home/detail/JzDetail'),
            props({params:{item,isHome}}){
              return{item,isHome}
            }
          }
        ]
      },
      {
        path:'qiuzhu',
        name:'qiuzhu',
        component: () => import('../views/home/Qiuzhu') 
      }
    ]
  },
  {
    path: '/browse_history',
    name: 'browse_history',
    component: () => import('../views/Browse_history')
  },
  {
    path: '/collection',
    name: 'collection',
    component:() => import('../views/Collection')
  },
  {
    path: '/publish',
    name: 'publish',
    component:() => import('../views/Publish'),
    children:[
      {
        path: '',
        redirect:'sxfb'
      },
      {
        path: 'sxfb',
        name: 'sxfb',
        component:() => import('../views/publish/Sxfb1')
      },
      {
        path: 'jzfb',
        name: 'jzfb',
        component:() => import('../views/publish/Jzfb1')
      }
    ]
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component:() => import('../views/personalCenter/Grzl')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
