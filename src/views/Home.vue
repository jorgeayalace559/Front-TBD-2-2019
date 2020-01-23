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
            <Tabla/>
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
  

  <v-container>
    <v-text-field v-model="radio" placeholder="Ingrese el radio en km"></v-text-field>
    <v-btn @click="getVolunteers" class="text-center">
      Obtener voluntarios
    </v-btn>
  </v-container>
  <v-container v-if="validador">
    <LeafletMap :voluntaries="voluntaries" v-bind:Emergency="Emergency" v-bind:radio="radio" v-bind:showRadio="showRadio"/>
  </v-container>
  
  </div>      
</template>

<script>
import Momentaneo from '@/components/Momentaneo';
import EmergenciasActuales from '../components/Emergency/EmergenciasActuales';
import RegistroUsuario from '../components/Voluntary/RegistroUsuario';
import RegistroEmergencia from '../components/Emergency/RegistroEmergencia';
import LeafletMap from '../components/Maps/LeafletMap';
import Tabla from '@/components/Tabla';

import http from "@/http-common";




export default {
  name: 'home',
  data: function(){
    return {
      voluntaries: null,
      radio: null,
      idEmergency: 3,
      validador: false,
      Emergency: {
                    "type": "Incendio",
                    "description": "incendio en la florida",
                    "capacity": 45,
                    "status": 1,
                    "latitude": "-35.452331",
                    "longitude": "-70.682908",
                    "idEmergency": 3
                },
      showRadio : false
    }
  },
  components: {
    Momentaneo, EmergenciasActuales, RegistroUsuario, RegistroEmergencia, LeafletMap, Tabla,
  },
  methods: {
    getUbicationEmergency(){
      http
      .get("/emergencies/"+this.idEmergency)
      .then(response => {
            this.Emergency = response.data;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },
    getVolunteers(){
      this.getUbicationEmergency();
      http
        .get("/volunteers/voluntariosDisponibles/"+this.radio+"/"+this.idEmergency)
        .then(response => {
            this.voluntaries = response.data;
            console.log(response.data);
            this.showRadio = true;
            this.validador = true;
        })
        .catch(e => {
            console.log(e);
        });
    }
  }
}
</script>
