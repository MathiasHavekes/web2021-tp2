<template>
  <v-container>
    <v-overflow-btn
      class="my-2"
      :items="items"
      label="Choisir une voiture"
      dense
    ></v-overflow-btn>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      items: ['voiture 1', 'voiture 2', 'voiture 3', 'voiture 4'],
    }),
  }
</script>