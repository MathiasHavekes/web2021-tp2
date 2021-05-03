<template>
  <v-card class="container" color="secondary">
    <div class="leaseform">
      <v-form>
        <DatePicker v-model="dates" />
        <CarSelector v-model="selectedCar" />
        <GoogleMap class="Googlemaps"/>
        <FacilitiesPicker v-model="facilities" />
        <v-btn
          color="background"
          class="btn-submit"
          depressed
          elevation="2"
          large
          @click="sendNewLeaseInfo()"
        >
          Louer
        </v-btn>
      </v-form>
    </div>
  </v-card>
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
<style scoped>

.container{
  margin-top: 5%;
  width: 60%;
  border-radius: 10px;
  margin-bottom: 5%;
}

.leaseform{
  width: 100%;
}

.btn-submit{
  margin-left: 42%;
  width: 15%;
}

.Googlemaps{
  width: 100%;
}
</style>

