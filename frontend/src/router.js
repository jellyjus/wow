import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Guild from './components/Guild.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/guild/id:id',
            component: Guild,
            children: [
                { path: '', redirect: 'main' },
                { path: 'main', component: Register },
                { path: 'users', component: Register },

            ]
        },
        {
            path: '/login',
            name: 'Login',
            component:  Register
        }
    ]
})