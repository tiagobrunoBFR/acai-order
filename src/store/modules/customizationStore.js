import CustomizationService from '../../services/CustomizationService'

export default {

    namespaced: true,

    state: {
        customizationStore: [],
    },

    mutations: {

        SET_CUSTOMIZATION (state, newcustomization) {

            newcustomization.forEach(function (item) {
                // console.log(item)
                item.amount = 0;
            })
            console.log(newcustomization)
            state.customizationStore = newcustomization

        },

    },

    actions: {

        listCustomization ({commit}) {

            CustomizationService.list().then((response) => {

                commit('SET_CUSTOMIZATION', response.data)
            })

        }

    },

    getters: {

        customizations (state) {

            return state.customizationStore

        },

    },
}