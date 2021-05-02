import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueGoogleMap from 'vuejs-google-maps';
import 'vuejs-google-maps/dist/vuejs-google-maps.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyAQVDCdgEViZOxhoRuLm99Bw-vsmu3isrU',
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
