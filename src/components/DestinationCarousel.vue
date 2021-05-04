<template>
  <v-carousel height="600" cycle interval="10000">
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="requireImages(image.src)"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-container class="d-flex justify-center" style="width: 100%">
        <h1 style="font-size: 6em">Venez decouvrir le Quebec</h1>
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
          src: "gaspesie.jpg",
        },
        {
          src: "quebec.jpg",
        },
        {
          src: "mont_tramblant.jpg",
        },
        {
          src: "hiver_quebec.jpg",
        },
      ],
    };
  },

  methods: {
    requireImages: function (src) {
      return require("../assets/images/" + src);
    },
  },
};
</script>