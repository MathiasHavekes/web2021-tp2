<template>
  <div class="rent-car">
    <v-form>
      <DatePicker/>
      <DropDown style = "position:absolute;top:400px;left:20px"/>
      <Bouton style = "position:absolute;top:490px;left:30px"/>
      
    </v-form>
  </div>
</template>

<script>
import DatePicker from "../components/DatePicker";
import DropDown from "../components/DropDown";
import Bouton from"../components/Button"


export default {
  components: {
    DatePicker: DatePicker,
    DropDown: DropDown,
    Bouton: Bouton
  }
};
</script>

