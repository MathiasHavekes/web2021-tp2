<template>
  <v-layout column class="mt-12">
    <v-layout class="my-12" column align-center>
      <h2>Historique des locations</h2>
    </v-layout>

    <v-layout class="my-12" row wrap justify-center>
      <div v-for="lease in userLeases" :key="lease.title">
        <v-flex xs12 md11 lg10>
          <LeaseCard :lease="lease" class="my-6" />
        </v-flex>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
import LeaseCard from "../components/LeaseCard";

export default {
  components: {
    LeaseCard: LeaseCard,
  },

  props: {
    userLeases: Array,
  },
};
</script>
