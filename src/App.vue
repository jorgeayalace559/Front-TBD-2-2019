<template>
  <v-app>
    <!-- En toolbar esta includio el router view para cargar el contenido de la pagina-->
    <Toolbar></Toolbar>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar';


export default {
  name: 'App',

  components: {
    Toolbar
  },

  data: () => ({
    //
  }),
};
</script>
