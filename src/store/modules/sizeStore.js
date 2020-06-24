import SizeService from '../../services/SizeService'

export default {

    namespaced: true,

    state: {
        sizeStore: [],
    },

    mutations: {

        SET_SIZE (state, newSize) {

            state.sizeStore = newSize

        },

    },

    actions: {

        listSizes ({commit}) {

            SizeService.list().then((response) => {
                commit('SET_SIZE', response.data)
            })

        }

    },

    getters: {

        sizes (state) {

            return state.sizeStore

        },

    },
}