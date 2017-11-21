import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import Main from '../components/main/main.vue'
import Page1 from '../components/page1/page1.vue'
import Page2 from '../components/page2/page2.vue'
import Page3 from '../components/page3/page3.vue'
import Page4 from '../components/page4/page4.vue'

Vue.use(Router);

export default new Router({
   routes: [
      {
         path: '/login',
         component: Login
      },
      {
         path: '/',
         meta: {
            requireAuth: true
         },
         component: Main,
         children: [
            {path: '//page1', component: Page1},
            {path: '//page2', component: Page2},
            {path: '//page3', component: Page3},
            {path: '//page4', component: Page4}
         ]
      }
   ]
})
