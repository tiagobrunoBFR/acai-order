import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import sizeStore from '@/store/modules/sizeStore'
import FlavorStore from '@/store/modules/flavorStore'
import CustomizationStore from '@/store/modules/customizationStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    size: sizeStore,
    flavor: FlavorStore,
    customization: CustomizationStore
  },
  strict: false
})
