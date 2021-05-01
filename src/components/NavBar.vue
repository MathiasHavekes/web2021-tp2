<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CarBay</v-toolbar-title>
      <v-spacer></v-spacer>
      <OptionMenu></OptionMenu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="primary"
      dark
    >
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in links"
            :key="item.text"
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import OptionMenu from "./OptionMenu.vue";

export default {
  components: {
    OptionMenu: OptionMenu,
  },

  data() {
    return {
      
      drawer: false,
      links: [
        { text: "Accueil", icon: "mdi-home", route: "/" },
        {
          text: "Mon compte",
          icon: "mdi-account-circle",
          route: "/user/account",
        },
        {
          text: "Louer une voiture",
          icon: "mdi-car-electric",
          route: "/rent/car",
        },
      ],
    };
  },
};
</script>
