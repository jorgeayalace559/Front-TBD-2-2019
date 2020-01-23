<template>
    <div class="querygeo">
         <v-card>
        
        
        <v-container>
            <h1 class="font-weight-light text-center">Consultas Geolocalizadas</h1>
            <v-row>
                <v-col cols="6" xs="12" md="6">
                    <v-text-field type="number" v-model="radio" placeholder="Ingrese el radio en km"></v-text-field>
                    <v-btn @click="getVolunteers"  class="text-center">
                    Obtener voluntarios
                    </v-btn>
                </v-col>
                <v-col cols="6" xs="12" md="6">
                    <v-text-field type="number" v-model="numberVoluntaries" placeholder="Ingrese el número de voluntarios"></v-text-field>
                    <v-btn @click="getNumberVolunteers" class="text-center">
                    Obtener voluntarios
                    </v-btn>
                </v-col>
            </v-row>
            <v-row >
                <v-container>
                 <LeafletMap v-if="validador" :voluntaries="voluntaries" v-bind:Emergency="Emergency" v-bind:radio="radio" v-bind:showRadio="showRadio"/>
                </v-container>
            </v-row>  
        </v-container>


        </v-card>
    </div>
</template>

<script>
import LeafletMap from '../components/Maps/LeafletMap';
import http from "@/http-common";

export default {
    name: "querygeo",
    props: ["emergency"],
    data(){
        return {
            numberVoluntaries: null,
            voluntaries: null,
            radio: null,
            idEmergency: this.emergency.idEmergency,
            validador: false,
            Emergency: null,
            showRadio : false
        }
    },
    components: {
        LeafletMap, http
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
        },

        getNumberVolunteers(){
            this.getUbicationEmergency();
        http
            .get("/volunteers/topDistance/"+this.numberVoluntaries+"/"+this.idEmergency)
            .then(response => {
                this.voluntaries = response.data;
                console.log(response.data);
                this.showRadio = false;
                this.validador = true;
            })
            .catch(e => {
                console.log(e);
            });
        },
    }
}
</script>

<style scoped>
    .map {
        height:95vh;
    }
</style>