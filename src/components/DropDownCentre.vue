<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" label="Centre de départ" solo></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" label="Centre d'arrivée" solo></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ["Centre 1", "Centre 2", "Centre 3", "Centre 4"],
  }),
};
</script>