<template>
  <v-card>
    <v-card-title>
      Voluntarios
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="voluntarios"
      :search="search"
    ></v-data-table>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'id',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Apellido', value: 'apellido' },
          { text: 'Genero', value: 'genero' },
          { text: 'Correo', value: 'correo' },
          { text: 'Latitud', value: 'latitud' },
          { text: 'Longitud', value: 'longitud' },
        ],
        voluntarios: [
          {
            id: 1,
            nombre: 'Franco',
            apellido: 'Tapia',
            genero: 'Masculino',
            correo: 'franco@tapia.cl',
            latitud: 1,
            longitud:2,
          },
        ],
      }
    },
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