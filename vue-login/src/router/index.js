import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import Main from '../components/main/main.vue'
import Table from '../components/table/table.vue'
import Page2 from '../components/page2/page2.vue'
import Page3 from '../components/page3/page3.vue'
import Page4 from '../components/page4/page4.vue'
import Excel from '../components/excel/export_excel.vue'
import Slect_excel from '../components/excel/export_selectexcel.vue'
import UnloadExcel from '../components/excel/unloadExcel.vue'
import Zip from '../components/zip/zip.vue'

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
                {path: '//table', component: Table},
                {path: '//page2', component: Page2},
                {path: '//page3', component: Page3},
                {path: '//page4', component: Page4},
                {path: '//excel', component: Excel},
                {path: '//select_excel', component: Slect_excel},
                {path: '//unload_excel', component: UnloadExcel},
                {path: '//zip', component: Zip}
            ]
        }
    ]
})
