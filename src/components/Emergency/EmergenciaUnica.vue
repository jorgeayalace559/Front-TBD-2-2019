<template>
    <div >
      <v-card>
        <v-card-title>
          {{emergency.type}}
        </v-card-title>
        <v-card>
          <p>{{this.emergency.description}}</p>
        </v-card>
        <br>
        <v-btn v-if="this.emergency.status === 0" variant="primary">Asignar Emergencia</v-btn>&nbsp;&nbsp;&nbsp;
        <v-btn variant="danger" v-on:click="deleteEmergency()">Eliminar Emergencia</v-btn>
      </v-card>
    </div>
</template>

<script>
import http from "@/http-common";
 
export default {
  name: "emergency",
  props: ["emergency"],
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.customer.id,
        name: this.customer.name,
        age: this.customer.age,
        active: status
      };
 
      http
        .put("/customer/" + this.customer.id, data)
        .then(response => {
          this.customer.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteEmergency() {
      http
        .delete("/emergencies/" + this.emergency.idEmergency)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/emergencies');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  },
  
};
</script>

