<template>
  <div class="index">
    <DestinationCarousel />

    <v-container class="d-flex flex-column">
      <h1 class="text-center">Des dixaines de voitures disponibles</h1>
      <h2 class="text-center">
        Sauvez la planete en optant pour des modeles electriques ou hybrides !
      </h2>
    </v-container>

    <v-container class="my-16" style="width: 75%">
      <v-row justify="center">
        <div v-for="car in cars" :key="car.title">
          <v-col>
            <CarCard :car="car" />
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DestinationCarousel from "@/components/DestinationCarousel";
import CarCard from "@/components/CarCard";
import { getCars } from "@/api/cars";

export default {
  components: {
    DestinationCarousel,
    CarCard,
  },

  data() {
    return {
      cars: [],
    };
  },

  async created() {
    this.cars = await getCars();
  },
};
</script>
