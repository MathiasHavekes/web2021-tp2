<template>
  <v-container class="pa-16">
    <v-autocomplete
      v-model="selectedCar"
      :items="carModels"
      dense
      label="Choisir une voiture"
      color="antiBackground"
    ></v-autocomplete>
  </v-container>
</template>

<script>
import { getCars } from "@/api/cars";

export default {
  data: () => ({
    carModels: [],
    selectedCar: "",
  }),

  async created() {
    this.carModels = await getCars();
    this.carModels = this.carModels.map((car) => car.model);
  },
};
</script>