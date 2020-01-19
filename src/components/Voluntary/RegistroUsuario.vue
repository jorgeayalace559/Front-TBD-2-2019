<template>
    <div>
        <v-container>
            <v-card
            outlined
            >
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Súmate como voluntario</v-list-item-title>
                    <v-list-item-subtitle>Completa los siguientes datos e inscríbete como voluntario en tu región.</v-list-item-subtitle>
                </v-list-item-content> 
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field type="text" class="form-control" v-model="form.nombre" placeholder="Nombre"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field type="text" class="form-control" v-model="form.apellidoPaterno"  placeholder="Apellido paterno"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field type="text" class="form-control" v-model="form.apellidoMaterno"  placeholder="Apellido materno"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mt-3">
                            <v-col cols="12" md="4">
                                    <v-select
                                    v-model="form.genero"
                                    :items="generos"
                                    label="Ingrese su género"
                                    required
                                    ></v-select>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field type="text" class="form-control" v-model="form.rut" placeholder="RUT"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field type="text" class="form-control" v-model="form.correo" placeholder="Correo electrónico"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mt-6">
                            <v-col cols="12" md="4">
                                <v-text-field type="number" class="form-control" v-model="form.celular" placeholder="Celular: +569"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-select
                                    :items="regiones"
                                    v-model="form.region"
                                    label="Selecciona tu región"
                                    outlined
                                    >
                                </v-select>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-select
                                    :items="form.region.comunas"
                                    v-model="form.comuna"
                                    label="Selecciona tu región"
                                    outlined
                                    >
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row align="center">
                            <v-col cols="12">
                                <v-btn class="text-center" variant="primary">Registrarme</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>

            </v-card>
        </v-container>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data(){
        return {
            form: {
            nombre: '',
            apellidoMaterno: '',
            apellidoPaterno: '',
            rut: '',
            correo: '',
            celular: null,
            genero: null,
            region: {comunas: ['Selecciona una región']},
            comuna:null
            },
            generos: ['Hombre', 'Mujer','Ninguno']
        }
    },
    computed: {
        ...mapState('regiones',['regiones']),
    },
    methods: {

    }

}
</script>
