import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    meta: { title: 'BIM', icon: 'dashboard' },
  },

  {
    path: '/models',
    component: Layout,
    children: [
      {
        path: '',
        name: 'BIM',
        component: () => import('@/views/bim/'),
        meta: { title: 'BIM Модели', icon: 'dashboard' }
      },
    ]
  },

  {
    path: '/remarks',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Remarks',
        component: () => import('@/views/bim-remarks/'),
        meta: { title: 'Замечания', icon: 'dashboard'}
      },
    ]
  },

  {
    path: '/remarks-bases',
    component: Layout,
    children: [
      {
        path: '',
        name: 'RemarkBases',
        component: () => import('@/views/bim-remarks-bases/'),
        meta: { title: 'Базы замечаний', icon: 'dashboard' }
      },
    ]
  },

  {
    path: '/prescriptions',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Prescriptions',
        component: () => import('@/views/bim-prescriptions/'),
        meta: { title: 'Предписания', icon: 'dashboard'}
      },
    ]
  },

  {
    path: '/statuses',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Statuses',
        component: () => import('@/views/bim-statuses/'),
        meta: { title: 'Статусы', icon: 'dashboard' }
      },
    ]
  },

  {
    path: '/elements',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Elements',
        component: () => import('@/views/bim-statuses/'),
        meta: { title: 'Элементы', icon: 'dashboard' }
      },
    ]
  },

  {
    path: '/worktypes',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Worktypes',
        component: () => import('@/views/worktypes/'),
        meta: { title: 'Виды работ', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/uploads',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Uploads',
        component: () => import('@/views/users-uploads/'),
        meta: { title: 'Файлы', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/status-history',
    component: Layout,
    children: [
      {
        path: '',
        name: 'StatusHistory',
        component: () => import('@/views/status-history/'),
        meta: { title: 'История статусов', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: '',
        name: 'users',
        component: () => import('@/views/users/'),
        meta: { title: 'Пользователи', icon: 'user' }
      }
    ]
  },

  {
    path: '/companies',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Companies',
        component: () => import('@/views/companies/'),
        meta: { title: 'Компании', icon: 'user' }
      },
      {
        path: ':id',
        name: 'Company',
        hidden: true,
        component: () => import('@/views/forms/company/'),
        meta: { title: 'Редактирование компании', icon: 'user' }
      }
    ]
  },

  {
    path: '/targets',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Targets',
        component: () => import('@/views/targets/'),
        meta: { title: 'Объекты', icon: 'user' }
      }
    ]
  },

  {
    path: '/projects',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Projects',
        component: () => import('@/views/projects/'),
        meta: { title: 'Проекты', icon: 'user' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', 
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
