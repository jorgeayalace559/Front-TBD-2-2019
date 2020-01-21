<template>
  <v-app>
    <!-- En toolbar esta includio el router view para cargar el contenido de la pagina-->
    <div id="app">
    </div>
    <Toolbar></Toolbar>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import GoogleMap from '@/components/GoogleMap';

export default {
  name: 'App',

  components: {
    Toolbar,
    GoogleMap
  },

  data: () => ({
    //
  }),
};
</script>