<template>
    <div class="row map">
        <v-container>
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
                :lat-lng="circle.center"
                :radius="radio*1000"
                color="cicle.color"
            >
            </l-circle>
        </l-map>
        </v-container>
    </div>
    <!-- /.row map -->
</template>

<script>
import {LMap, LTileLayer, LMarker, LIcon, LPopup, LCircle, LCircleMarker } from 'vue2-leaflet';
import iconEmergency from '@/assets/emergencia-icon.png';

export default {
    name: 'MyAwesomeMap',
    props: {
        voluntaries: Array,
        Emergency: Object,
        radio: Int32Array,
        showRadio: Boolean
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LPopup,
        LCircle,
        LCircleMarker
    },
    data() {
        return {
            zoom:6,
            center: L.latLng(this.Emergency.latitude, this.Emergency.longitude),
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            icon: iconEmergency,
            iconSize: [32,32],
            circle: { center: [this.Emergency.latitude, this.Emergency.longitude], radius: this.radio, color: '#FF00FF' },
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
        height: 65vh;
    }
</style>
