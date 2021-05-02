<template>
  <v-container>
    <v-autocomplete
      v-model="selectedCar"
      :items="carModels"
      dense
      label="Filled"
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