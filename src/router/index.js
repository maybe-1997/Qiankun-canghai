const routes = [
  {
    path: '/',
    redirect: '/orderManage'
  },
  {
    path: '/orderManage',
    component: () => import('../views/orderManage')
  },
  {
    path: '/merchantManage',
    component: () => import('../views/merchantManage')
  },
  {
    path: '/platformManage',
    component: () => import('../views/platformManage')
  }
]
export default routes;