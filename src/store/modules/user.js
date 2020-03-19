const state = {
    userInfo: {},
    // buff: {}
}

const getters = {

}

const actions = {
    updateUser({ commit }, payload) {
        commit('updateUser', payload)
    },
    // updateBuff({ commit }, payload) {
    //     commit('updateBuff', payload)
    // }
}

const mutations = {
    updateUser(state, payload) { 
        state['userInfo'] = payload
    },
    // updateBuff(state, payload) {
    //     state['buff'] = payload
    // }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
