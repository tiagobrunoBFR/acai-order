export default {

    namespaced: true,

    state: {
        miniStore: false,
        drawerStore: true,
    },

    mutations: {

        SET_MINI(state, newMini) {

            state.miniStore = newMini

        },

        SET_DRAWER(state, newDrawer) {

            state.drawerStore = newDrawer
        }

    },

    getters: {

        mini(state) {

            return state.miniStore

        },

        drawer(state) {

            return state.drawerStore

        },

    },
}
