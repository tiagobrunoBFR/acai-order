import FlavorService from '../../services/FlavorService'

export default {

    namespaced: true,

    state: {
        flavorStore: [],
    },

    mutations: {

        SET_FLAVOR (state, newFlavor) {

            state.flavorStore = newFlavor

        },

    },

    actions: {

        listFlavors ({commit}) {

            FlavorService.list().then((response) => {
                commit('SET_FLAVOR', response.data)
            })

        }

    },

    getters: {

        flavors (state) {

            return state.flavorStore

        },

    },
}