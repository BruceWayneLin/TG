const state = {
    login: true,
    toggleSide: false,
    busyLoading: false,
    register: false,
    buyModal: false, 
    sellModal: false,
    showQR: false,
}

const getters = {

}

const actions = {
    changeLogin({ commit }, payload) {
        commit('changeLogin', payload)
    },
    toggleNav: ({commit, state}, payload)=> {
        commit('toggleSideNav', payload)
    },
    busyLoading: ({commit, state}, payload)=> {
        commit('busyLoading', payload)
    },
    register: ({commit, state}, payload)=> {
        commit('register', payload)
    },
    buyModal: ({commit, state}, payload)=> {
        commit('buyModal', payload)
    },
    sellModal: ({commit, state}, payload)=> {
        commit('sellModal', payload)
    },
    showQR: ({commit, state}, payload)=> {
        commit('showQR', payload)
    },
}

const mutations = {
    changeLogin(state, payload) { 
        state['login'] = payload
    },
    toggleSideNav: (state, payload)=> {
        state['toggleSide'] = payload
    },
    busyLoading: (state, payload)=> {
        state['busyLoading'] = payload
    },
    register: (state, payload)=> {
        state['register'] = payload
    },
    buyModal: (state, payload)=> {
        state['buyModal'] = payload
    },
    sellModal: (state, payload)=> {
        state['sellModal'] = payload
    },
    showQR:  (state, payload)=> {
        state['showQR'] = payload
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
