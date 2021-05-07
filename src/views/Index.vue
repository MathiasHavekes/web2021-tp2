<template>
  <v-layout column>
    <DestinationCarousel />

    <v-layout class="my-12" column align-center>
      <h1>Des dixaines de voitures disponibles</h1>
      <h2>
        Sauvez la planete en optant pour des modeles electriques ou hybrides !
      </h2>
    </v-layout>

    <v-layout class="my-12" row wrap justify-center>
      <div v-for="car in cars" :key="car.title">
        <v-flex xs12 md11 lg10>
          <CarCard :car="car" />
        </v-flex>
      </div>
    </v-layout>
  </v-layout>
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
