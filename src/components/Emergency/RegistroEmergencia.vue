<template>
    <div class="registroEmergencia">
        <v-card>
            <v-card-title>
                Registra tu emergencia ahora mismo
            </v-card-title>
            <p>
                Completa los siguientes datos para registrar una nueva emergencia
            </p>
            <v-form>
                <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field type="text" class="form-control" v-model="emergency.description" placeholder="Descripción"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field type="number" class="form-control" v-model="emergency.capacity" placeholder="Número de voluntarios"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                            <v-select
                            id="input-3"
                            v-model="emergency.type"
                            :items="tiposEmergencias"
                            label="Elige el tipo de emergencia"
                            required
                            ></v-select>
                    </v-col>
                </v-row>
                <v-row class="mt-6">
                    <v-col cols="12" md="6">
                            <v-select 
                            v-model="regionSeleccionada"
                            :items="regiones"
                            label="Selecciona tu región"
                            outlined
                            >
                            </v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-select
                            :items="regionSeleccionada.comunas"
                            v-model="direction.district"
                            label="Selecciona tu comuna"
                            outlined
                            >
                        </v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field type="text" class="form-control" v-model="direction.street" placeholder="Calle"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field type="number" class="form-control" v-model="direction.number"  placeholder="Número calle"></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
                <br>
                    <v-btn @click="saveEmergency" class="text-center" variant="primary">Guardar</v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import http from "@/http-common";
import {mapState} from 'vuex';

export default {
    data(){
        return {
            regionSeleccionada: '',
            emergency: {
                id: 0,
                description: '',
                capacity: null,
                type: null,
                status: 0
            },
            direction: {
                street: null,
                number: null,
                district: null,
                district_id: null,
                emergency: null,
                idDistrict: null
            },
            tiposEmergencias: ['Incendio', 'Tsunami','Forestal'],
            colores: ['Rojo', 'Amarillo','Verde'],
            dataEmergencyOut: []
        }
    },
    computed: {
        ...mapState('regiones',['regiones']),
    },
    methods: {
        /* eslint-disable no-console */
        saveEmergency() {
        var dataEmergency = {
            type: this.emergency.type,
            description: this.emergency.description,
            capacity: this.emergency.capacity,
            status: this.emergency.status,
            user: 1
        };
        http
            .post("/emergencies/create", dataEmergency)
            .then(response => {
            this.emergency.id = response.data.idEmergency;
            console.log(response.data);
            this.getDistrict();
            })
            .catch(e => {
            console.log(e);
            alert("No has completado todos los campos");
            });

        },
        getDistrict(){
            http
                .get("/districtByName/"+this.direction.district)
                .then(response => {
                    this.direction.idDistrict = response.data.id;
                    console.log(this.direction.idDistrict);
                    this.saveDirection();
                })
                .catch(e => {
                    console.log(e);
                });
        },
        saveDirection(){
            var dataDirection = {
                street: this.direction.street,
                number: this.direction.number,
                district: this.direction.idDistrict,
                emergency: this.emergency.id,
                voluntary: 1
            };
            console.log(dataDirection);
            http
                .post("/direction/create", dataDirection)
                .then(response => {
                console.log(response.data);
                alert("Se ha creado la emergencia con éxito");
                location.reload();
                })
                .catch(e => {
                console.log(e);
                alert("No has completado todos los campos");
                });
        }
    }
}
</script>

