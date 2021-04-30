<template>
  <div class="rent-car">
    <v-card
    class="ma-5"
    color="secondary"
    >
    <v-form>
      <DatePicker/>
      <CarSelector/>
      <FacilitiesPicker/>
      <Bouton/>
    </v-form>
    </v-card>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker";
import CarSelector from "@/components/CarSelector";
import FacilitiesPicker from "@/components/FacilitiesPicker";
import Bouton from"@/components/Button";

export default {
  components: {
    DatePicker: DatePicker,
    CarSelector: CarSelector,
    FacilitiesPicker : FacilitiesPicker,
    Bouton: Bouton,
  }
};
</script>

