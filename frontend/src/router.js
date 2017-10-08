import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home/Home.vue'
import Register from './components/register/Register.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component:  Register
        }
    ]
})