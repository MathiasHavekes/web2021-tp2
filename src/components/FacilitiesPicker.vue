<template>
  <v-container>
    <v-autocomplete
      v-model="facilities[0]"
      :items="facilitiesNames"
      dense
      label="Choisir un centre de depart"
    ></v-autocomplete>

    <v-autocomplete
      v-model="facilities[1]"
      :items="facilitiesNames"
      dense
      label="Choisir un centre d'arrive"
    ></v-autocomplete>
  </v-container>
</template>

<script>
import { getFacilities } from "@/api/facilities";

export default {
  data: () => ({
    facilities: ["", ""],
    facilitiesNames: [],
  }),

  async created() {
    this.facilitiesNames = await getFacilities();
    this.facilitiesNames = this.facilitiesNames.map((f) => f.title);
  },
};
</script>