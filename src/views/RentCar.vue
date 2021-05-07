<template>
  <v-layout row class="my-12">
    <v-spacer />
    <v-flex xs10 md9 lg8>
      <v-card class="container" color="secondary">
        <v-form @submit.prevent="sendNewLeaseInfo(formData)">
          <v-layout row>
            <v-spacer />
            <v-flex xs10 md10 lg10>
              <v-layout column>
                <DatePicker v-model="formData.dates" class="my-12" />

                <GoogleMap :allFacilities="allFacilities" class="my-6" />

                <FacilitiesPicker
                  v-model="formData.facilities"
                  :allFacilities="allFacilities"
                  class="my-12"
                />

                <CarSelector
                  v-if="formData.facilities.start"
                  v-model="formData.car"
                  :allCars="allCars"
                  :selectedFacility="formData.facilities.start"
                  class="my-12"
                />

                <v-layout row class="my-12">
                  <v-spacer />
                  <v-flex xs6 md6 lg6>
                    <v-btn
                      style="width: 100%"
                      type="submit"
                      color="background"
                      large
                    >
                      Louer
                    </v-btn>
                  </v-flex>
                  <v-spacer />
                </v-layout>
              </v-layout>
            </v-flex>
            <v-spacer />
          </v-layout>
        </v-form>
      </v-card>
    </v-flex>
    <v-spacer />
  </v-layout>
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

  methods: {
    sendNewLeaseInfo: async function (leaseInfo) {
      let inserted = await postNewLease(leaseInfo);
      if (inserted.isInserted) {
        this.$router.push("/user/account");
        this.$store.commit("setAlert", {
          type: "success",
          message:
            "La location a bien été enregistrée, vous pouvez allez cherche votre " +
            inserted.carModel +
            " dans un centre CarBay.",
          isVisible: true,
        });
      } else {
        this.$store.commit("setAlert", {
          type: "error",
          message: "La location a été refuse, veuillez ressayer !",
          isVisible: true,
        });
      }
    },
  },

  async created() {
    this.allFacilities = await getFacilities();
    this.allCars = await getCars();
  },
};
</script>

