<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group>
        <v-list-item>
          <v-switch
          v-model="$vuetify.theme.dark"
          append-icon="mdi-brightness-6"
          inset
          persistent-hint
          ></v-switch>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
			links: [
        { text: "Accueil", icon: "mdi-home", route: "/" },
        { text: "Mon compte", icon: "mdi-account-circle", route: "/user/account" },
				{ text: "Louer une voiture", icon: "mdi-car-electric", route: "/rent/car" },
				{ text: "Trouver un vol", icon: "mdi-airplane", route: "/find/flight" },
      ]
    };
  },
};
</script>
