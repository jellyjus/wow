import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'

Vue.use(Vuetify);

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    router,
    render: h => h(App)
});
