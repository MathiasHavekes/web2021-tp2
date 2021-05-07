<template>
  <v-layout row class="ma-0">
    <v-flex xs12 md12 lg5>
      <v-autocomplete
        v-model="facilities.start"
        :items="allFacilities"
        item-value="_id"
        item-text="title"
        label="Choisir un centre de depart"
        color="antiBackground"
      ></v-autocomplete>
    </v-flex>

    <v-spacer />

    <v-flex xs12 md12 lg5>
      <v-autocomplete
        v-model="facilities.end"
        :items="allFacilities"
        item-value="_id"
        item-text="title"
        label="Choisir un centre d'arrive"
        color="antiBackground"
      ></v-autocomplete>
    </v-flex>
  </v-layout>
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