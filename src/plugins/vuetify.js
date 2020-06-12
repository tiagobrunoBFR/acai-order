import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.red.darken3,
                secondary: colors.red.darken2,
                accent: colors.pink.accent3,
                error: colors.red.accent4,
            },
            dark: {
                primary: colors.red.darken4,
            },
        },
    },
})
