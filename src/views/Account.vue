<template>
  <v-container>
    <AccountInformation />
    <v-spacer></v-spacer>
    <LeasesHistory />
  </v-container>
</template>

<script>
import AccountInformation from "@/components/AccountInformation";
import LeasesHistory from "@/components/LeasesHistory";

export default {
  components: {
    AccountInformation: AccountInformation,
    LeasesHistory: LeasesHistory,
  },
};
</script>