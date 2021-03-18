<template>
  <div class="home">
    <DestinationCarousel/>
    <CarCard />
    <CarCard />
    <CarCard />
    <CarCard />
  </div>
</template>

<script>
import DestinationCarousel from "../components/DestinationCarousel";
import CarCard from "../components/CarCard";

export default {
	components: {
    DestinationCarousel: DestinationCarousel,
    CarCard: CarCard,
  },
};
</script>
