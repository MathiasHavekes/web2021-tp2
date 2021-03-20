<template>
  <div class="rent-car">
    <v-form>
      <DatePicker/>
    </v-form>
  </div>
</template>

<script>
import DatePicker from "../components/DatePicker"

export default {
  components: {
    DatePicker: DatePicker
  }
};
</script>

