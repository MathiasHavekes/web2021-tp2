<template>
  <v-layout column class="my-12">
    <v-layout row class="mt-3">
      <v-spacer />
      <v-flex xs10 md6 lg4>
        <AccountInformation :userInfo="userInfo" />
      </v-flex>
      <v-spacer />
    </v-layout>
    <LeasesHistory :userLeases="userLeases" />
  </v-layout>
</template>

<script>
import AccountInformation from "@/components/AccountInformation";
import LeasesHistory from "@/components/LeasesHistory";
import { getUserInformation } from "@/api/clients";
import { getUserLeases } from "@/api/clients";

export default {
  components: {
    AccountInformation,
    LeasesHistory,
  },

  data() {
    return {
      userInfo: {},
      userLeases: [],
    };
  },

  async created() {
    this.userInfo = await getUserInformation();
    this.userLeases = await getUserLeases();
  },
};
</script>