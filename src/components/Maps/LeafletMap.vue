<template>
    <div class="row map">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker 
                :key="index"
                v-for="(voluntary,index) in voluntaries"
                :lat-lng="latLng(voluntary.latitude,voluntary.longitude)"
                >
                <l-popup>
                    <p>{{voluntary.name}} {{voluntary.lastname}}</p>  
                </l-popup>
            </l-marker>
            <l-marker :lat-lng="latLng(this.Emergency.latitude, this.Emergency.longitude)">
                <l-icon
                    :iconSize = "iconSize"
                    :icon-url = "icon"
                    >
                </l-icon>
                <l-popup>
                    {{Emergency.description}}
                </l-popup>
            </l-marker>
            <l-circle
                v-if="this.showRadio"
                :lat-lng="latLng(this.Emergency.latitude,this.Emergency.longitude)"
                :radius="this.circle.radius"
                color="cicle.color"
            >
            </l-circle>
        </l-map>
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
        Emergency: Object,
        radio: String,
        showRadio: Boolean
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
            zoom:6,
            center: L.latLng(this.Emergency.latitude, this.Emergency.longitude),
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            icon: iconEmergency,
            iconSize: [32,32],
            circle: {  radius: parseInt(this.radio)*1000, color: '#FF00FF' },
            cir: true,
            centerPrueba: {latitud:-35.452331,longitud:-70.682908}
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
