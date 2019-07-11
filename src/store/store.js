import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentPage: "Home"
    },
    getters: {
        getCurrentPage(state) {
            return state.currentPage
        }
    },
    mutations: {
        setCurrentProject (state, currentPage) {
            state.currentPage = currentPage
        }
    }
});