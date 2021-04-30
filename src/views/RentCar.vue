<template>
  <div class="rent-car">
    <v-form>
      <DatePicker/>
      <DropDownCentre/>
      <DropDownVoiture style = "position:absolute;top:450px;left:20px"/>
      <Bouton style = "position:absolute;top:560px;left:30px"/>
      
      
    </v-form>
  </div>
</template>

<script>
import DatePicker from "../components/DatePicker";
import DropDownVoiture from "../components/DropDownVoiture";
import DropDownCentre from "../components/DropDownCentre";
import Bouton from"../components/Button"

export default {
  components: {
    DatePicker: DatePicker,
    DropDownVoiture: DropDownVoiture,
    DropDownCentre: DropDownCentre,
    Bouton: Bouton
  }
};
</script>

