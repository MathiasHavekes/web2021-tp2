<template>
  <v-card class="container">
    <h3 class="title">Historique des locations</h3>
    <br />
    <v-row>
      <div v-for="location in locations" :key="location.id">
        <v-col>
          <LeaseCard class="lease-card" :location="location" />
        </v-col>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import LeaseCard from "../components/LeaseCard";

export default {
  components: {
    LeaseCard: LeaseCard,
  },

  data() {
    return {
      locations: [
        {
          id: "#36",
          src: "../assets/images_bd/tesla_model_s.jpg",
          durée: "14 jours",
          price: 980,
          dateDebut: "7-04-2021",
          dateFin: "21-04-2021",
          centreDepot: "Carbay Rental Montreal AirPort",
        },
        {
          id: "#2895",
          src: "../assets/images_bd/tesla_model_s.jpg",
          durée: "21 jours",
          price: 1470,
          dateDebut: "7-04-2021",
          dateFin: "28-04-2021",
          centreDepot: "Carbay Rental Montreal AirPort",
        },
        {
          id: "#3",
          src: "../assets/images_bd/tesla_model_s.jpg",
          durée: "18 jours",
          price: 1200,
          dateDebut: "7-04-2021",
          dateFin: "25-04-2021",
          centreDepot: "Carbay Rental Montreal AirPort",
        },
        {
          id: "#36",
          src: "../assets/images_bd/tesla_model_s.jpg",
          durée: "14 jours",
          price: 980,
          dateDebut: "7-04-2021",
          dateFin: "21-04-2021",
          centreDepot: "Carbay Rental Montreal AirPort",
        },
        {
          id: "#36",
          src: "../assets/images_bd/tesla_model_s.jpg",
          durée: "14 jours",
          price: 980,
          dateDebut: "7-04-2021",
          dateFin: "21-04-2021",
          centreDepot: "Carbay Rental Montreal AirPort",
        },
      ],
    };
  },
};
</script>
<style scoped>
.title {
  margin-left: 43%;
}

.container {
  width: 90%;
  margin-left: 5%;
}

.lease-card {
  margin: 2px;
}
</style>