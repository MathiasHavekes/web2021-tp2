import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import * as VueGoogleMap from 'vue2-google-maps'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

Vue.prototype.$isConnected = false;

Vue.use(VueGoogleMap, {
  load: {
    key: 'AIzaSyAQVDCdgEViZOxhoRuLm99Bw-vsmu3isrU',
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
