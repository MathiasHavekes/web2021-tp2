<template>
  <div>
    <AccountInformation />
    <br>
    <LeasesHistory />
  </div>
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