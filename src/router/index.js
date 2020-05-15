import Vue from 'vue'
import Router from 'vue-router'

// 主页，登录，注册
const Home = () => import('components/home/Home')
const Login = () => import('components/login/Login')
const Register = () => import('components/register/Register')

// 公司信息
const CompanyInfo = () => import('components/companyInfo/CompanyInfo')
// 企业总览
const Enterprise = () => import('components/enterprise/Enterprise')
// 企业融资
const Corporate = () => import('components/corporate/Corporate')
const Receivable = () => import('components/corporate/corporateCom/Receivable') // 应收账款详情
const Generate = () => import('components/corporate/corporateCom/Generate') // 代采融资详情
// 借款管理
const Borrowing = () => import('components/borrowing/Borrowing')
const BorrowingDetail = () => import('components/borrowing/borrowingCom/BorrowingDetail')
// 赎货管理
const Redeem = () => import('components/redeem/Redeem')
// 还款管理
const Payment = () => import('components/payment/Payment')
// 合同管理
const Contract = () => import('components/contract/Contract')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/enterprise', component: Enterprise },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
      path: '/home',
      redirect: '/enterprise',
      component: Home,
      children: [
        { path: '/companyInfo', component: CompanyInfo },
        { path: '/enterprise', component: Enterprise },
        { path: '/corporate', component: Corporate },
        { path: '/borrowing', component: Borrowing },
        { path: '/redeem', component: Redeem },
        { path: '/payment', component: Payment },
        { path: '/contract', component: Contract }
      ]
    },
    // 借款管理-借款详情
    { path: '/borrowingDetail', component: BorrowingDetail },
    // 企业融资-应收账款产品
    { path: '/receivable/:productId', component: Receivable },
    { path: '/generate/:productId', component: Generate }
  ]
})

// 登陆拦截
router.beforeEach((to, form, next) => {
  if (to.path === '/login') {
    next()
  } else if (to.path === '/register') {
    next()
  } else {
    const uuid = localStorage.getItem('uuid')
    // if (uuid) {
    //   next()
    // } else {
    //   next('/login')
    // }
    next()
  }
})

export default router
