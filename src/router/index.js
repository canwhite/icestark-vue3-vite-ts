import { createRouter, createWebHistory,createWebHashHistory} from 'vue-router';
import Home from '@/pages/home/index.vue';
import About from '@/pages/about/index.vue';
import Login from '@/pages/Login.vue';
import NotFound from '@/pages/notFound/index.vue';
// add router config by zack
// webapck支持
// const files = require.context('./modules', true, /\.js$/)
// vite支持
const files = import.meta.globEager("./modules/*.js")
let map = {};//用状态机的模式
Object.keys(files).reduce((modules, modulePath) => {
  let list = [];
  const file = files[modulePath];
  console.log(modulePath);
  const name = modulePath.split("/")[2].split(".")[0];
  console.log("name",name);
  list = [
    ...file.default
  ] 
  map[name] = list;
}, {}) 

//router
const routerHashHistory = createWebHistory();

const router = createRouter({
  history: routerHashHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notfound',
      component: NotFound,
    },
    //PS:路由可以分块儿引入
    ...map.test
  ],
});

export default router;
