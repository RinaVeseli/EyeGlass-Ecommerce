// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { aliases, mdi, fa } from 'vuetify/iconsets/mdi';
import colors from 'vuetify/lib/util/colors'
import { createVuetify } from 'vuetify';

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },theme: {
    themes: {
      light: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
});
