<template>
    <div>
        <v-card >
            <v-card-title>
                Emergencias Actuales
            </v-card-title>
            <v-list-item-group v-model="emergencie" color="primary">
                <v-list-item
                    v-for="(emergency, i) in emergencies"
                    :key="i"
                >
                    <router-link 
                        v-on="on"
                    :to="{
                        name: 'emergency-details',
                        params: { emergency: emergency, id: emergency.idEmergency }
                        }">
                        {{emergency.description}}
                    </router-link>
                </v-list-item>
            </v-list-item-group>
            <v-dialog
                v-model="dialog"
                width="800"
                
            >
                <!---------------------CONTENIDO DE DIALOG ---------------------------->
                    <router-view @refreshData="refreshList" ></router-view>
                <!---------------------FIN CONTENIDO DE DIALOG ---------------------------->
            </v-dialog>
            
        </v-card> 
    </div>
</template>

<script>
import http from "@/http-common.js";

export default {
    name: "VisualizarEmergencia",

    data(){
        return {
            emergencie : 2,
            emergencies: []
        };
    },
    computed: {

    },
    methods: {
        /* eslint-disable no-console */
        retrieveEmergencies() {
        http
            .get("/emergencies")
            .then(response => {
            this.emergencies = response.data; // JSON are parsed automatically.
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
        },
        refreshList() {
        this.retrieveEmergencies();
        }
        /* eslint-enable no-console */
    },
    mounted(){
        this.refreshList();
    }
}
</script>