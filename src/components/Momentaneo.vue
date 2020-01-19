<template>
    <div class="moment">
        <v-content>
            <v-row>
                <v-col xs12 md6>
                    <Card></Card>
                </v-col>
                <v-col xs12 md6>
                    <Card></Card>
                </v-col>
            </v-row>
            <v-row>
                <v-col xs12 md6>
                    <Card></Card>
                </v-col>
                <v-col xs12 md6>
                    <Card></Card>
                </v-col>
            </v-row>
            <v-row>
                <v-col xs12 md6>
                    <Card></Card>
                </v-col>
                <v-col xs12 md6>
                    <Card></Card>
                </v-col>
            </v-row>
            <v-row>
                <v-col xs12 md6>
                    <Card></Card>
                </v-col>
                <v-col xs12 md6>
                    <Card></Card>
                </v-col>
            </v-row>
        </v-content>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  components: {
    Card
  }
}
</script>
