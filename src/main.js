import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import UserCenterIndex from './components/UserCenterIndex.vue';
import UserCenterUserAddress from './components/UserCenterUserAddress.vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
axios.defaults.baseURL = 'http://192.168.1.120/api';
const router = new VueRouter({
    mode:'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    {
        path: '/userCenterUserAddress',
        name: 'userCenterUserAddress',
        component: UserCenterUserAddress,
        meta: {
            auth: true
        }
    },
    {
        path: '/userCenterIndex',
        name: 'userCenterIndex',
        component: UserCenterIndex,
        meta: {
            auth: true
        }
    }]
});
Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
   tokenDefaultName: 'token',
});
App.router = Vue.router
new Vue(App).$mount('#app');