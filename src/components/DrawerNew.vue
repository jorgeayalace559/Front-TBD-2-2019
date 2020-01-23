<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>


        <v-list-item-content>
          <v-list-item-title>TBD</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    props: {
        drawer: Boolean
    },
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard', route: "/" },
          { title: 'Registrar emergencia', icon: 'question_answer', route: "/register-emergency" },
          { title: 'Consultas', icon: 'explorer', route: "/register-emergency" },
          { title: 'Emergencias', icon: 'notifications_none', route: "/emergencies" }
        ],
      }
    },
  }
</script>