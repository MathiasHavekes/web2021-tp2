<template>
  <div class="rent-car">
    <v-card class="mx-auto pa-5" color="secondary" width="50%">
      <form>
        <DatePicker/>
      </form>
    </v-card>
  </div>
</template>

<script>
import DatePicker from "../components/DatePicker"


export default {
  components: {
    DatePicker: DatePicker
  },






};
</script>

