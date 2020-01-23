<template>
    <div class="row map">
        <v-container>
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
        </v-container>
    </div>
    <!-- /.row map -->
</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'MyAwesomeMap',
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data() {
        return {
            zoom:9,
            currentCenter: L.latLng(-33.463781, -70.692145),
            currentZoom: 9,
            center: L.latLng(-33.463781, -70.692145),
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }
    },
    methods: {
        latLng: function(lat,lng){
            return L.latLng(lat,lng);
        },

        centerUpdate: function(center){
            this.currentCenter = center
        },

        zoomUpdate: function(zoom){
            this.currentZoom = zoom
        },

    },
    computed: {
    }
}
</script>

<style scoped>
    .map {
        height: 45vh;
    }
</style>