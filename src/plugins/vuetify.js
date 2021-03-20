import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.darken2,
        secondary: colors.blueGrey.lighten4,
        accent: colors.shades.black,
        background: colors.blueGrey.lighten5
      },
      dark: {
        primary: colors.blueGrey.darken3,
        secondary: colors.blueGrey.darken3,
        accent: colors.shades.black,
        background: colors.blueGrey.darken4
      },
    },
  },
})
  
export default vuetify;