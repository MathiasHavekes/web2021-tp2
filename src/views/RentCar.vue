<template>
  <div class="rent-car">
    <v-card class="ma-5" color="secondary">
      <v-form>
        <DatePicker v-model="dates" />
        <CarSelector v-model="selectedCar" />
        <FacilitiesPicker v-model="facilities" />
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
        startDate: this.dates[0],
        endDate: this.dates[1],
        startFacility: this.facilities[0],
        endFacility: this.facilities[1],
        selectedCar: this.selectedCar,
      };

      //TODO: CHANGE FORM TYPE
      await postNewLease(leaseInfo);
    },
  },
};
</script>

