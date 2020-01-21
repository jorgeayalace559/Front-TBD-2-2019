import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from "vue2-google-maps";
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.use(VueAxios, axios)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC38DImzDWUz1pimDNKhL8zHyJCuHRB9B8",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
