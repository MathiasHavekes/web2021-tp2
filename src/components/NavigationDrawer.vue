<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group v-model="item" color="primary">
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
</template>

<script>
export default {
  props: {
    drawer: Boolean
  },

  data() {
    return {
      links: [
        { text: "Accueil", icon: "mdi-home", route: "/" },
        { text: "Mon compte", icon: "mdi-food-apple", route: "/user/account" },
      ]
    };
  }
};
</script>
