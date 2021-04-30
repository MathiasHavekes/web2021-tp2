<template>
  <v-carousel height="1000" cycle interval="10000">
    <v-carousel-item
      v-for="(image,i) in images"
      :key="i"
      :src="image.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <h1>Venez decouvrir le Quebec</h1>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          {
            src: require('../assets/images/gaspesie.jpg'),
          },
          {
            src: require('../assets/images/quebec.jpg'),
          },
          {
            src: require('../assets/images/mont_tramblant.jpg'),
          },
          {
            src: require('../assets/images/hiver_quebec.jpg'),
          },
        ],
      }
    },
  }
</script>