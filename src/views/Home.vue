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
  </div>      
</template>

<script>
import Momentaneo from '@/components/Momentaneo';
import EmergenciasActuales from '../components/Emergency/EmergenciasActuales';
import RegistroUsuario from '../components/Voluntary/RegistroUsuario';
import RegistroEmergencia from '../components/Emergency/RegistroEmergencia';

export default {
  name: 'home',
  components: {
    Momentaneo, EmergenciasActuales, RegistroUsuario, RegistroEmergencia
  }
}
</script>
