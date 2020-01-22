<template>
    <div class="moment">
        <v-content>
           <datatable :data="persons"></datatable>
        </v-content>
    </div>
</template>

<script>
var TagDataTable = {};

// Creamos el plugin
TagDataTable.install = function(Vue, options) {
  'use strict';

  // Definimos el componente
  Vue.component('datatable', {
    name: 'datatable',
    template: '<table id="example"></table>',
    props: ['data'],

    // Valores default del componente
    data: function() {
      return {
        data: []
      };
    },
    
    watch: {
      data: {
        handler: function(val, oldVal) {
          this.DataTable.fnClearTable();
          this.DataTable.fnAddData(val);
        },
        deep: true
      }
    },    
    
    ready: function() {

      this.DataTable = $('#example').dataTable({
        data: this.data,
        columns: [
          { title: "Nombre", mData: "firstName" },
          { title: "Apellido", mData: "lastName" },
          { title: "Fecha", mData: "birthday" },
          { title: "Lugar", mData: "amount" },
          { title: "Disponibilidad", mData: "percentage" },
          { title: "Teléfono", mData: "phone" }
        ]
      });      

    }

  });

};

// Instalamos nuestro componente
Vue.use(TagDataTable);

var vm = {};

$(document).ready(function() {

  // Creamos un View Model para nuestra App
  vm = new Vue({
    // Definimos el contexto de la App
    el: 'body', 
    
    // Valores por default de las propiedades del View Model
    data: {
      persons: dataPerson
    }
  });
  
  // Actualiza el primer registro para refrescar la tabla
  setTimeout(function() {
    vm.persons[4].firstName = 'German !!';
    console.log(vm.persons[4].firstName);
  }, 5000);
  
});

var dataPerson = [
    {id: 1, firstName: 'Gabriel', lastName: 'Kotliar', birthday: '23071979', amount: 10.22, percentage: 1, enable: true, phone: "4444-4444"},
    {id: 2, firstName: 'Gabriel', lastName: 'Kotliar', birthday: '23071979', amount: 10.22, percentage: 100, enable: false, phone: "4444-4444"},
    {id: 3, firstName: 'Gabriel', lastName: 'Kotliar', birthday:  '23071979', amount: 100.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 4, firstName: 'Gustavo', lastName: 'Rodriguez', birthday: '23071979', amount: 1000.22, percentage: 97.5, enable: true, phone: "4444-4444"},
    {id: 5, firstName: 'Alejandro', lastName: 'Prieto', birthday: '07/23/1979', amount: 1000.22, percentage: 65, enable: true, phone: "4444-4444"},
    {id: 6, firstName: 'Dario', lastName: 'Prieto', birthday: '07231979', amount: 1000.22, percentage: 43.256, enable: true, phone: "4444-4444"},
    {id: 7, firstName: 'Pedro', lastName: 'Peraferrer', birthday: '19790723', amount: -1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 8, firstName: 'Jose', lastName: 'Peraferrer', birthday: '23.07.1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 9, firstName: 'Maria', lastName: 'Rodriguez', birthday: 'Mon Jul 23 1979 00:00:00 GMT-0300 (Argentina Standard Time)', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 10, firstName: 'Angel', lastName: 'Peraferrer', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 11, firstName: 'Octavio', lastName: 'Kotliar', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 12, firstName: 'Miguel', lastName: 'Rodriguez', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 13, firstName: 'Laura', lastName: 'Prieto', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 14, firstName: 'Melisa', lastName: 'Peraferrer', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 15, firstName: 'Cecilia', lastName: 'Peraferrer', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 16, firstName: 'Anatonia', lastName: 'Rodriguez', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 17, firstName: 'Josefa', lastName: 'Prieto', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 18, firstName: 'Luisa', lastName: 'Kotliar', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 19, firstName: 'Bob', lastName: 'Marley', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 20, firstName: 'BillC', lastName: 'Gates', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"},
    {id: 21, firstName: 'Steve', lastName: 'Jobs', birthday: '23/07/1979', amount: 1000.22, percentage: 100, enable: true, phone: "4444-4444"}
];
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