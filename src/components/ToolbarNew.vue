<template>
  <div>
    <v-toolbar
      class= 'elevation-0'
    >
      <v-app-bar-nav-icon @click="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-toolbar-title>Administración de emergencias</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
      class="blue-grey lighten-1"
      link
      to="/register-emergency"
      dark
      >
      Quiero Unirme!
      </v-btn>
    </v-toolbar>
    <Drawer v-bind:drawer="drawer"/>
  </div>
</template>

<script>
import Drawer from '../components/DrawerNew';
 
export default {
  name: 'toolbar',
  data: function(){
    return {
      drawer: false
    }
  },
  components: {
    Drawer
  }
}
</script>