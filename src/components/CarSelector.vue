<template>
  <v-autocomplete
    v-model="selectedCar"
    :items="filteredCars"
    item-value="_id"
    item-text="model"
    dense
    label="Choisir une voiture"
    color="antiBackground"
  ></v-autocomplete>
</template>

<script>
export default {
  props: {
    allCars: Array,
    selectedFacility: {
      type: String,
    },

    // car id
    value: {
      type: String,
      default: undefined,
    },
  },

  data: () => ({
    selectedCar: "",
  }),

  computed: {
    filteredCars() {
      return this.allCars.filter(
        (car) => car.currentFacility === this.selectedFacility
      );
    },
  },

  watch: {
    value() {
      this.selectedCar = this.value;
    },
    selectedCar() {
      this.$emit("input", this.selectedCar);
    },
  },
};
</script>