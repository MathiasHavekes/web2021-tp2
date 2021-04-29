<template>
    <div>
      <InformationsCompte />
      <v-spacer></v-spacer>
      <HistoriqueLocation />
    </div>
</template>

<script>
import InformationsCompte from "../components/informationsCompte"
import HistoriqueLocation from "../components/historiqueLocation"

export default {
  components: {
    InformationsCompte : InformationsCompte,
    HistoriqueLocation : HistoriqueLocation
  }
};
</script>