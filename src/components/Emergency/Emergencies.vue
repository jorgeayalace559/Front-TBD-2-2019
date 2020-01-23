<template>
    <v-container>
        <h1 class="font-weight-light text-center">Emergencias Actuales</h1>
        <v-list-item
          v-for="item in emergencies"
          :key="item.description"
          
        >
        
          <v-btn icon link :to="{
                name: 'emergency-details',
                params: { emergency: item, id: item.idEmergency }
                }">
            <v-icon >explore</v-icon>
          </v-btn>

          {{item.idEmergency}} - {{ item.type}} - {{item.description}}

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-container>
</template>

<script>
import http from "@/http-common.js";

export default {
    name: "emergencies",
    data(){
        return {
            emergencies: null
        }
    },
    components: {
        http
    },
    mounted() {  
        this.refreshList();
    },
    methods: {
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
    }
}
</script>