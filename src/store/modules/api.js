import axios from 'axios'
const modal = require('../../alertModal')
// axios.interceptors.request.use(function (config) {
//     if(sessionStorage.getItem('didi_token')){
//         config.headers.Authorization = `Bearer ${sessionStorage.getItem('didi_token')}`
//     }
//     return config;
// });

axios.interceptors.response.use((config) => {
    // console.log('平常', config)
    // if(config['data']['token']){
    //     sessionStorage.setItem('didi_token', config['data']['token'])
    //     config.headers.Authorization = `Bearer ${config['data']['token']}`
    //     console.log(config)
    //     return config
    // } else {
    //     return config
    // }
    return config
  }, (err) => {
    if(err.response.status == 401){
        localStorage.setItem('TG_LOGIN', false)
        return Promise.reject(err.response)
    }

    let msg = {}
    msg['modalTitle'] = '錯誤'
    msg['modalText'] = err.response['data']['message']
    msg['modalIcon'] = 'error',
    msg['modalButtonText'] = '確定',
    msg['modelRedirectUrl'] = ''
    modal.modal(msg)
    return Promise.reject(err.response);
})

const state = {
}

const getters = {

}

const actions = {
    getApi({commit, state, rootState}, data) {
        this.dispatch('busyLoading', true)
        return new Promise((res, rej)=>{
            axios({
                method: 'get',
                url: `${process.env.VUE_APP_API_URL + data['url']}`,
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': localStorage.getItem('TG_AUTH_TOKEN'),
                }
            })
            .then((response)=>{
                this.dispatch('busyLoading', false)
                res(response)
            })
            .catch((error)=>{
                res(error)
            })
        })
    },
    postApi({commit, state}, data) {
        this.dispatch('busyLoading', true)
        return new Promise((res, rej)=>{
            axios({
                method: 'post',
                url: `${process.env.VUE_APP_API_URL + data['url']}`,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': localStorage.getItem('TG_AUTH_TOKEN'),
                },
                data: data
            })
            .then((response)=>{
                if(response.data.error){
                }
                this.dispatch('busyLoading', false)
                res(response)
            })
            .catch((error)=>{
                res(error)
            })
        })
    }
}

const mutations = {

}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
