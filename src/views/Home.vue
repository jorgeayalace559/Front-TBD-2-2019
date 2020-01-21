<template>
  <div class="home">

  <!--------------------------------INICIO EFECTO PARALAX----------------------------------------->
  <v-parallax src="../assets/bombero.jpg" height="600">
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="800"
        
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            Quiero Registrarme!
          </v-btn>
        </template>
        <!---------------------CONTENIDO DE DIALOG ---------------------------->
            <RegistroUsuario/>
        <!---------------------FIN CONTENIDO DE DIALOG ---------------------------->
      </v-dialog>
    </div>
  </v-parallax>
  <!--------------------------------FIN EFECTO PARALAX----------------------------------------->

  <v-dialog
        v-model="dialog"
        width="800"
        
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            Crear una nueva emergencia
          </v-btn>
        </template>
        <!---------------------CONTENIDO DE DIALOG ---------------------------->
        <v-container>
          <v-row>
            <v-col xs="12" class="text-center">
              <RegistroEmergencia/>
            </v-col>
          </v-row>
        </v-container>
            
        <!---------------------FIN CONTENIDO DE DIALOG ---------------------------->
      </v-dialog>

    <v-container>
      <EmergenciasActuales/>
    </v-container>
  

  <Momentaneo/>
  <v-container>
    <LeafletMap :voluntaries="voluntaries" v-bind:centerEmergency="centerEmergency"/>
  </v-container>
  
  </div>      
</template>

<script>
import Momentaneo from '@/components/Momentaneo';
import EmergenciasActuales from '../components/Emergency/EmergenciasActuales';
import RegistroUsuario from '../components/Voluntary/RegistroUsuario';
import RegistroEmergencia from '../components/Emergency/RegistroEmergencia';
import GoogleMap from '../components/Maps/GoogleMap';
import LeafletMap from '../components/Maps/LeafletMap';

export default {
  name: 'home',
  data: function(){
    return {
      voluntaries: [{nombre: "roberto", latitud: -33.451509,longitud: -70.680390},
                    {nombre: "javier",latitud: -33.453630,longitud: -70.689091}],
      centerEmergency: {
        latitud:-33.452153,
        longitud:-70.682986
      }
    }
  },
  components: {
    Momentaneo, EmergenciasActuales, RegistroUsuario, RegistroEmergencia, GoogleMap, LeafletMap
  }
}
</script>
