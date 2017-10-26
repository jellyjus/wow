import axios from 'axios'

const http = {
    install(Vue, options) {
        Vue.prototype.$http = {
            get: function (url, params) {
                let add = '';
                if (params) {
                  add += '?';
                  for (let key in params)
                    add += `${key}=${params[key]}&`
                  add = add.slice(0,-1);
                }
                return axios.get(url + add)
            },
            post: function (url, body) {
                return axios.post(url, body)
            }
        }
    }
};

export default http;