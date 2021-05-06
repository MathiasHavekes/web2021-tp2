<template>
  <v-card class="container" color="secondary">
    <div class="leaseform">
      <v-form @submit.prevent="sendNewLeaseInfo(formData)">
        <DatePicker v-model="formData.dates" />
        <GoogleMap class="Googlemaps" :allFacilities="allFacilities" />
        <FacilitiesPicker
          v-model="formData.facilities"
          :allFacilities="allFacilities"
        />
        <CarSelector
          v-if="formData.facilities.start"
          v-model="formData.car"
          :allCars="allCars"
          :selectedFacility="formData.facilities.start"
        />
        <v-btn
          type="submit"
          color="background"
          class="btn-submit"
          depressed
          elevation="2"
          large
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
import { getFacilities } from "@/api/facilities";
import { getCars } from "@/api/cars";
import { postNewLease } from "@/api/leases";

export default {
  components: {
    DatePicker,
    CarSelector,
    FacilitiesPicker,
    GoogleMap,
  },

  data() {
    return {
      allFacilities: [],
      allCars: [],
      formData: {
        dates: ["", ""],
        car: undefined,
        facilities: {
          start: undefined,
          end: undefined,
        },
      },
    };
  },

  watch: {
    formData: {
      deep: true,
      handler() {
        console.log(this.formData);
      },
    },
  },

  methods: {
    sendNewLeaseInfo: async function (leaseInfo) {
      await postNewLease(leaseInfo);
      this.$router.push("/user/account");
    },
  },

  async created() {
    this.allFacilities = await getFacilities();
    this.allCars = await getCars();
  },
};
</script>

<style scoped>
.container {
  margin-top: 5%;
  width: 60%;
  border-radius: 10px;
  margin-bottom: 5%;
}

.leaseform {
  width: 100%;
}

.btn-submit {
  margin-left: 42%;
  width: 15%;
}

.Googlemaps {
  width: 100%;
}
</style>

