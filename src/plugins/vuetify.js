import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                brightBlue: '#85eae4',
                saturatedBlue: '#60a8a3',
                logoBlack: '#4a5568',
                textBrightBlue: '#50E1D8'
            },
            dark: {
                brightBlue: '#85eae4',
                saturatedBlue: '#8ae2dc',
                logoBlack: '#ffffff',
                textBrightBlue: '#00afab'
            },
        },
    },
}

export default new Vuetify(opts)