<template>
  <div class="index">
    <DestinationCarousel/>
    <v-spacer></v-spacer>
    <v-container fluid>
      <v-row>
        <div v-for="car in cars"
        :key="car.title">
          <v-col>
            <CarCard :car="car"/>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DestinationCarousel from "../components/DestinationCarousel";
import CarCard from "../components/CarCard";

export default {
	components: {
    DestinationCarousel: DestinationCarousel,
    CarCard: CarCard
  },

  data() {
    return { 
      cars: [
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
        { title: "Tesla Model S", src: "../assets/images_bd/tesla_model_s.jpg", description: "test", price: "$70/Jours" },
      ]
    }
  }
};
</script>
