<template>
<v-card>
    <v-container>
    <h3 class="font-weight-light">Rellena los datos para crear una nueva emergencia</h3>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-select
        v-model="type"
        :items="items"
        :rules="[v => !!v || 'El tipo de emergencia es requerido']"
        label="Tipo de emegencia"
        required
        ></v-select>

    <v-text-field
      v-model="description"
      :counter="200"
      :rules="nameRules"
      label="Descripción"
      required
    ></v-text-field>

    <v-text-field
      v-model="capacity"
      :rules="capacityRules"
      label="Número de voluntarios"
      type="number"
      required
    ></v-text-field>

    <h4 class="font-weight-light">Coloca el marcador en la ubicación de la emergencia:</h4>
    <v-container>
      <div class="row map">
        <l-map 
            @update:zoom="zoomUpdate"
            @update:center="centerUpdate"
            :zoom="zoom" 
            :center="center">

            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker 
                :lat-lng="latLng(this.currentCenter)"
                >
            </l-marker>
        </l-map>
        </div>
    </v-container>
    
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Guardar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpiar
    </v-btn>


  </v-form>
  </v-container>
  <v-snackbar
      v-model="snackbar"
    >
      Emergencia guardada con éxito
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
</v-card>
</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import http from "@/http-common";



  export default {
    data: () => ({
        snackbar: false,
        valid: true,
        capacity: null,
        description: '',
        nameRules: [
        v => !!v || 'Descripción requerida',
        v => v.length <= 200 || 'Largo máximo 200 carácteres',
      ],
        email: '',
        capacityRules: [
            v => !!v || 'El número de voluntarios es requerido',
            v => (v >= 1 && v <= 500) || 'Escriba una cantidad de 1 a 500',
        ],
        type: null,
        items: [
            'Incendio',
            'Inundación',
            'Terremoto',
            'Rescate',
        ],
        checkbox: false,
        zoom:9,
        currentCenter: L.latLng(-33.463781, -70.692145),
        currentZoom: 9,
        center: L.latLng(-33.463781, -70.692145),
        url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          this.saveEmergency()
        }
      },

      reset () {
        this.$refs.form.reset()
      },

      latLng: function(lat,lng){
          return L.latLng(lat,lng);
      },

      centerUpdate: function(center){
          this.currentCenter = center
      },

      zoomUpdate: function(zoom){
          this.currentZoom = zoom
      },

      saveEmergency() {
        var dataEmergency = {
            type: this.type,
            description: this.description,
            capacity: parseInt(this.capacity),
            status: 1,
            user: 1,
            latitude: this.currentCenter.lat,
            longitude: this.currentCenter.lng
        };
        console.log(dataEmergency);
        http
            .post("/emergencies/ncreate", dataEmergency)
            .then(response => {
            console.log(response.data);
            this.snackbar = true;
            })
            .catch(e => {
            console.log(e);
            alert("No has completado todos los campos");
            });

        },

    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        Map
    }
  }
</script>

<style scoped>
    .map {
        height: 45vh;
    }
</style>