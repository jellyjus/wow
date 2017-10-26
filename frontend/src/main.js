import Vue from 'vue'
import Vuetify from 'vuetify'
import 'babel-polyfill'

import router from './router'
import App from './App.vue'
import http from './services/http-service'

Vue.use(Vuetify);
Vue.use(http);

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    router,
    render: h => h(App)
});
