<template>
  <div class="geo">
    <v-card
    height="600">
  
    <h1 class="font-weight-light">Consultas Geolocalizadas</h1>
    <v-container>
        <v-text-field type="number" v-model="radio" placeholder="Ingrese el radio en km"></v-text-field>
        <v-btn @click="getVolunteers" class="text-center">
        Obtener voluntarios
        </v-btn>
    </v-container>
    <v-container v-if="validador">
        <LeafletMap :voluntaries="voluntaries" v-bind:Emergency="Emergency" v-bind:radio="radio" v-bind:showRadio="showRadio"/>
    </v-container>

  </v-card>
  
  </div>      
</template>

<script>
import EmergenciasActuales from '../components/Emergency/EmergenciasActuales';
import LeafletMap from '../components/Maps/LeafletMap';
import http from "@/http-common";


export default {
  name: 'geo',
  data: function(){
    return {
      voluntaries: null,
      radio: null,
      idEmergency: 1,
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
    Momentaneo, EmergenciasActuales, RegistroUsuario, RegistroEmergencia, LeafletMap, Tabla
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
