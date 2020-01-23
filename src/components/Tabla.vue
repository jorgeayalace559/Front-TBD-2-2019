<template>
  <v-card>
    <v-card-title>
      Emergencias
      <v-spacer></v-spacer>

    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="emergencies"
    ></v-data-table>
  </v-card>
</template>


<script>
import http from "@/http-common";

  export default {
    data () {
      return {
        headers: [
          {
            text: 'id',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'Id', value: 'idEmergency' },
          { text: 'Descripción', value: 'description' },
          { text: 'Tipo', value: 'type' },
          { text: 'Estado', value: 'status' },
          { text: 'Latitud', value: 'latitude' },
          { text: 'Longitud', value: 'longitude' },
        ],
        emergencies: null,
      }
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


<style>
body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }
  
  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }
  
  th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  td {
    background-color: #f9f9f9;
  }
  
  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }
  
  th.active {
    color: #fff;
  }
  
  th.active .arrow {
    opacity: 1;
  }
  
  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }
  
  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }
  
  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
</style>