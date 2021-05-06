<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CarBay</v-toolbar-title>
      <v-spacer></v-spacer>
      <OptionMenu></OptionMenu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary color="primary" dark app>
      <v-list>
        <v-list-item-group>
          <v-list-item link :to="`/`">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Accueil</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link v-if="!isConnected()" :to="`/user/signin`">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Se connecter</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link v-if="!isConnected()" :to="`/user/signup`">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>S'inscrire</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link v-if="isConnected()" :to="`/user/account`">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Mon compte</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            v-if="isConnected()"
            :to="`/rent/car`"
            active-class="no-active"
          >
            <v-list-item-icon>
              <v-icon>mdi-car-electric</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Louer une voiture</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link v-if="isConnected()" @click="disconnect()">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Se déconnecter</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import OptionMenu from "@/components/OptionMenu";
import { signout } from "@/api/clients";

export default {
  components: {
    OptionMenu: OptionMenu,
  },

  data() {
    return {
      drawer: false,
    };
  },

  methods: {
    isConnected: function () {
      if (localStorage.getItem("connected") == "true") {
        return true;
      } else {
        return false;
      }
    },

    disconnect: function () {
      localStorage.setItem("connected", false);
      this.$router.push("/");
      this.$forceUpdate();
      signout();
      this.$store.commit("setAlert", {
        type: "info",
        message: "Vous êtes maintenant déconnecté",
        isVisible: true,
      });
    },
  },
};
</script>
