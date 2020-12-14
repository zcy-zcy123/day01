import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/home.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../components/home/index.vue'),
        redirect: '/home',
        children: [
          {
            path: '',
            name: 'homes',
            component: () => import('../components/home/home.vue'),
          },
          {
            path: 'img',
            name: 'img',
            component: () => import('../components/home/img.vue'),
            meta: {
              title: '图片管理'
            }
          },
          {
            path: 'shopList',
            name: 'shopList',
            component: () => import('../components/home/shopList.vue'),
            meta: {
              title: '商品列表'
            }
          },
        ]
      },
      {
        path: '/shop',
        name: 'shopping',
        component: () => import('../components/shop/index.vue'),
        redirect: '/shop/shopList',
        children: [
          {
            path: 'shopList',
            name: 'shopLists',
            component: () => import('../components/shop/shopList.vue'),
            meta: {
              title: '商品列表'
            }
          },
          {
            path: 'classList',
            name: 'classList',
            component: () => import('../components/shop/classList.vue'),
            meta: {
              title: '分类列表'
            }
          },
          {
            path: 'shopGoods',
            name: 'shopGoods',
            component: () => import('../components/shop/shopGoods.vue'),
            meta: {
              title: '商品规格'
            }
          },
          {
            path: 'shopType',
            name: 'shopType',
            component: () => import('../components/shop/shopType.vue'),
            meta: {
              title: '商品类型'
            }
          },
          {
            path: 'shopNews',
            name: 'shopNews',
            component: () => import('../components/shop/shopNews.vue'),
            meta: {
              title: '商品评论'
            }
          },
        ]
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../components/order/index.vue'),
        redirect: '/order',
        children: [
          {
            path: '',
            name: 'orders',
            component: () => import('../components/order/order.vue'),
            meta: {
              title: '订单管理'
            }
          },
          {
            path: 'type',
            name: 'type',
            component: () => import('../components/order/type.vue'),
            meta: {
              title: '发票管理'
            }
          },
          {
            path: 'shopping',
            name: 'shoppings',
            component: () => import('../components/order/shopping.vue'),
            meta: {
              title: '售后服务'
            }
          },
        ]
      },
      {
        path: '/vip',
        name: 'vip',
        component: () => import('../components/vip/index.vue'),
        redirect: '/vip/vipList',
        children: [
          {
            path: 'vipList',
            name: 'vipList',
            component: () => import('../components/vip/vipList.vue'),
            meta: {
              title: '会员列表'
            }
          },
          {
            path: 'vipGoods',
            name: 'vipGoods',
            component: () => import('../components/vip/vipGoods.vue'),
            meta: {
              title: '会员等级'
            }
          },
        ]
      },
      {
        path: '/set',
        name: 'set',
        component: () => import('../components/set/index.vue'),
        redirect: '/set',
        children: [
          {
            path: '',
            name: 'sets',
            component: () => import('../components/set/set.vue'),
            meta: {
              title: '基础设置'
            }
          },
          {
            path: 'type',
            name: 'types',
            component: () => import('../components/set/type.vue'),
            meta: {
              title: '物流设置'
            }
          },
          {
            path: 'admin',
            name: 'admin',
            component: () => import('../components/set/admin.vue'),
            meta: {
              title: '管理员管理'
            }
          },
          {
            path: 'money',
            name: 'money',
            component: () => import('../components/set/money.vue'),
            meta: {
              title: '交易设置'
            }
          },
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    var date = new Date().getTime()
    if (date < localStorage.getItem('time')) {
      next()
    } else {
      if (to.path == '/login') {
        next()
      } else {
        next('/login')
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
