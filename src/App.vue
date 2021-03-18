<template>
  <v-app style="background: black">
    <NavBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: 'App',

  components: {
    NavBar: NavBar
  },

  data: () => ({
    //
  }),
};
</script>

