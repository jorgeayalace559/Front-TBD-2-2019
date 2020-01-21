import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps";
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD1-EZnGF6nRZaeDtUjbFwCo9GIChL6luo",
    libraries: "places" // necessary for places input
  }
});

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1-EZnGF6nRZaeDtUjbFwCo9GIChL6luo&callback=initMap">
</script>








