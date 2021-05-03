<template>
  <v-carousel height="600" cycle interval="10000">
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="image.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <h1 style="font-size: 6em">Venez decouvrir le Quebec</h1>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: require("../assets/images/gaspesie.jpg"),
        },
        {
          src: require("../assets/images/quebec.jpg"),
        },
        {
          src: require("../assets/images/mont_tramblant.jpg"),
        },
        {
          src: require("../assets/images/hiver_quebec.jpg"),
        },
      ],
    };
  },
};
</script>