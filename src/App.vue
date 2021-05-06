<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <Alert />
    <NavBar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Alert from "@/components/Alert";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
    Alert,
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
