<template>
  <v-container>
    <AccountInformation :userInfo="userInfo" />
    <LeasesHistory :userLeases="userLeases"/>
  </v-container>
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
      userLeases : [],
    };
  },

  async created() {
    this.userInfo = await getUserInformation();
    this.userLeases = await getUserLeases();
    console.log(this.userLeases);
  },
};
</script>