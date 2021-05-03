<template>
  <div class="d-flex flex-row justify-center py-16">
    <v-card class="d-flex flex-row justify-center" color="secondary">
      <v-form>
        <DatePicker v-model="dates" />
        <CarSelector v-model="selectedCar" />
        <GoogleMap />
        <FacilitiesPicker v-model="facilities" />
        <v-btn
          color="background"
          depressed
          elevation="2"
          large
          @click="sendNewLeaseInfo()"
        >
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
import GoogleMap from "@/components/GoogleMap";
import { postNewLease } from "@/api/leases";

export default {
  components: {
    DatePicker: DatePicker,
    CarSelector: CarSelector,
    FacilitiesPicker: FacilitiesPicker,
    GoogleMap: GoogleMap,
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

