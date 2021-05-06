<template>
  <v-container>
    <v-autocomplete
      class="pa-16"
      v-model="facilities.start"
      :items="allFacilities"
      item-value="_id"
      item-text="title"
      dense
      label="Choisir un centre de depart"
      color="antiBackground"
    ></v-autocomplete>

    <v-autocomplete
      class="pa-16"
      v-model="facilities.end"
      :items="allFacilities"
      item-value="_id"
      item-text="title"
      dense
      label="Choisir un centre d'arrive"
      color="antiBackground"
    ></v-autocomplete>
  </v-container>
</template>

<script>
export default {
  props: {
    allFacilities: Array,
    value: {
      type: Object,
      default: () => ({
        start: undefined,
        end: undefined,
      }),
    },
  },

  data() {
    return {
      facilities: this.value,
    };
  },

  watch: {
    value: {
      deep: true,
      handler() {
        this.facilities = this.value;
      },
    },

    facilities: {
      deep: true,
      handler() {
        this.$emit("input", this.facilities);
      },
    },
  },
};
</script>