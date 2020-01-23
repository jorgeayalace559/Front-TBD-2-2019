<template>
  <v-app :style="{'background-image':'url(http://alsaprefabricados.com/wp-content/uploads/2018/01/350829-widescreen-website-background-1920x1080-windows-xp.jpg)'}">
    <Toolbar/>
    <v-container>
        <router-view></router-view>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from './components/ToolbarNew';
import Footer from './components/Footer'


export default {
  name: 'App',

  components: {
    Toolbar, Footer
  },

  data: () => ({
    //
  }),
};
</script>
