<template>
  <v-container>
    <AccountInformation :userInfo="userInfo" />
    <LeasesHistory />
  </v-container>
</template>

<script>
import AccountInformation from "@/components/AccountInformation";
import LeasesHistory from "@/components/LeasesHistory";
import { getUserInformation } from "@/api/clients";

export default {
  components: {
    AccountInformation,
    LeasesHistory,
  },

  data() {
    return {
      userInfo: {},
    };
  },

  async created() {
    this.userInfo = await getUserInformation();
  },
};
</script>