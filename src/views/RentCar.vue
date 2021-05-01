<template>
  <div class="rent-car">
    <v-card class="ma-5" color="secondary">
      <v-form>
        <DatePicker />
        <CarSelector />
        <FacilitiesPicker />
        <v-btn depressed elevation="2" large @click="sendNewLeaseInfo()">
          Louer
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker";
import CarSelector from "@/components/CarSelector";
import FacilitiesPicker from "@/components/FacilitiesPicker";
import { postNewLease } from "@/api/leases";

export default {
  components: {
    DatePicker: DatePicker,
    CarSelector: CarSelector,
    FacilitiesPicker: FacilitiesPicker,
  },

  methods: {
    sendNewLeaseInfo: async function () {
      const leaseInfo = {
        dates: this.dates,
        startFacility: this.startFacility,
        endFacility: this.endFacility,
        selectedCar: this.selectedCar,
      };
      console.log(leaseInfo);
      console.debug(leaseInfo);
      console.debug("TEST");
      await postNewLease();
    },
  },
};
</script>

