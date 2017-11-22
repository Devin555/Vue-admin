// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-animate/dist/vue2-animate.min.css';
import '../static/iconfont/iconfont.css'


Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const whiteList = ['/login'];// 不重定向白名单
router.beforeEach((to, from, next) => {
    // 判断该路由是否需要登录权限
    if (router.options.routes[1].meta.requireAuth) {
        let token = window.localStorage.getItem('TOKEN');
        if (token == null || token == "" || token == undefined) {
            if (whiteList.indexOf(to.path) !== -1) {
                next()
            } else {
                next('/login')
            }
        } else {
            if (to.path === '/login') {
                next({path: '/'})
            } else {
                next()
            }
        }
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {
        App
    }
});



