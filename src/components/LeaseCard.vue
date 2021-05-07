<template>
  <v-card class="parent" max-width="313" color="secondary">
    <v-img src="../assets/images_cars/audi_e-tron.jpg"  height="200px"></v-img>

    <v-card-title>
      Modèle de voiture :
      {{ lease.carModel }}
    </v-card-title>

    <v-card-actions>
      <v-btn text> + Details </v-btn>

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

        <v-card-text> Centre de départ : {{ lease.Facility }} </v-card-text>

        <v-divider></v-divider>

        <v-card-text> Adresse du centre : {{ lease.AddressFacility }} </v-card-text>
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
};
</script>