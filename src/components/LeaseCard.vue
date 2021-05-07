<template>
  <v-card class="parent" max-width="500" color="secondary">
    <v-img :src="requireImages(lease.carImage)" height="200px"></v-img>

    <v-card-title>
      {{ lease.carModel }}
    </v-card-title>

    <v-card-actions>
      <v-btn text @click="show = !show"> + Détails </v-btn>

      <v-spacer />

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text> Date de début : {{ lease.startDate }} </v-card-text>

        <v-divider></v-divider>

        <v-card-text> Date de fin : {{ lease.endDate }} </v-card-text>

        <v-divider></v-divider>

        <v-card-text> Durée : {{ lease.period }} jours </v-card-text>

        <v-divider></v-divider>

        <v-card-text> Prix total : {{ lease.price }}$ </v-card-text>

        <v-divider></v-divider>

        <v-card-text> Centre de départ : {{ lease.facility }} </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          Adresse du centre : {{ lease.addressFacility }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  props: {
    lease: Object,
  },

  methods: {
    requireImages: function (src) {
      return require("../assets/images_cars/" + src);
    },
  },
};
</script>