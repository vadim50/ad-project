import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);



export default new Vuetify({
  theme: {
    themes: {
      light: {
            primary: '#f44336',
		    secondary: '#03a9f4',
		    accent: '#00bcd4',
		    error: '#009688',
		    warning: '#4caf50',
		    info: '#ff9800',
		    success: '#ffc107'
      },
    },
  },
})