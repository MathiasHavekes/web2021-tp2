<template>
  <v-container>
    <v-autocomplete
            v-model="value"
            cars="carNames"
            dense
            label="Filled"
    ></v-autocomplete>
  </v-container>
</template>

<script>
  import { getCars } from "@/api/cars";

  export default {
    data: () => ({
      carNames: []
    }),

    async created() {
      this.carNames = await getCars().map(cars => cars.name);
    }
  };
</script>