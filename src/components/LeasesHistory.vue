<template>
  <v-container>
    <h3 class="title">Historique des locations</h3>
    <v-row>
      <div v-for="lease in userLeases" :key="lease.title">
        <v-col>
          <LeaseCard class="lease-card" :lease="lease" />
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import LeaseCard from "../components/LeaseCard";

export default {

  props : {
    userLeases : Array,  
  },

  components: {
    LeaseCard: LeaseCard,
  },

  data() {},
};
</script>
