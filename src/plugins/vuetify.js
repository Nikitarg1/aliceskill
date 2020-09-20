import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                brightBlue: '#85eae4',
                saturatedBlue: '#8ae2dc',
                brightGreen: '#c4e98e',
                saturatedGreen: '#abe05e',
                logoBlack: '#4a5568'
            },
            dark: {
                brightBlue: '#85eae4',
                saturatedBlue: '#8ae2dc',
                brightGreen: '#c4e98e',
                saturatedGreen: '#abe05e',
                logoBlack: '#ffffff'
            },
        },
    },
}

export default new Vuetify(opts)