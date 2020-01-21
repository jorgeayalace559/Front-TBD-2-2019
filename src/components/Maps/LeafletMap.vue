<template>
    <div class="row map">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker 
                :key="index"
                v-for="(voluntary,index) in voluntaries"
                :lat-lng="latLng(voluntary.latitud,voluntary.longitud)"
                >
                <l-popup>
                    {{voluntary.nombre}}
                </l-popup>
            </l-marker>
            <l-marker :lat-lng="latLng(this.centerEmergency.latitud, this.centerEmergency.longitud)">
                <l-icon
                    :iconSize = "iconSize"
                    :icon-url = "icon"
                    >
                </l-icon>
            </l-marker>
            <l-circle
            v-if="this.cir"
                :lat-lng="circle.center"
                :radius="circle.radius"
                color="cicle.color"
            >
                <l-popup content="Circle" />
            </l-circle>
        </l-map>
        <h1>{{center}}</h1>
    </div>
    <!-- /.row map -->
</template>

<script>
import {LMap, LTileLayer, LMarker, LIcon, LPopup, LCircle } from 'vue2-leaflet';
import iconEmergency from '@/assets/emergencia-icon.png';

export default {
    name: 'MyAwesomeMap',
    props: {
        voluntaries: Array,
        centerEmergency: Object
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LPopup,
        LCircle
    },
    data() {
        return {
            zoom:13,
            center: L.latLng(this.centerEmergency.latitud, this.centerEmergency.longitud),
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            icon: iconEmergency,
            iconSize: [32,32],
            circle: { center: [this.centerEmergency.latitud, this.centerEmergency.longitud], radius: 5000, color: '#FF00FF' },
            cir: true
        }
    },
    methods: {
        latLng: function(lat,lng){
        return L.latLng(lat,lng);
        }
    }
}
</script>

<style scoped>
    .map {
        height: 95vh;
    }
</style>
