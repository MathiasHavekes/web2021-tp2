<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <NavBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    NavBar: NavBar,
    Footer: Footer
  },

  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>

