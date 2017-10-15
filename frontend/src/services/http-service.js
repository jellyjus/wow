import axios from 'axios'

const http = {
    install(Vue, options) {
        Vue.prototype.$http = {
            get: function (url) {
                return axios.get(url)
            },
            post: function (url, body) {
                return axios.post(url, body)
            }
        }
    }
};

export default http;