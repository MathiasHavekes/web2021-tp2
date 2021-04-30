<template>
  <v-container>
    <v-autocomplete
      v-model="value"
      :items="facilitiesNames"
      dense
      label="Choisir un centre de location"
    ></v-autocomplete>

    <v-autocomplete
      v-model="value"
      :items="facilitiesNames"
      dense
      label="Choisir un centre de depot"
    ></v-autocomplete>
  </v-container>
</template>

<script>
  import { getFacilities } from "@/api/facilities";

  export default {
    data: () => ({
      facilitiesNames: []
    }),

    async created() {
      this.facilitiesNames = await getFacilities() //.map(facilities => facilities.title);
    }
  };
</script>