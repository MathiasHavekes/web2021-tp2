<template>
  <v-container class="d-flex flex-row justify-center">
    <v-date-picker
      v-model="dates"
      range
      :allowed-dates="getAllowedDates"
      header-color="primary"
      light
    ></v-date-picker>

    <v-container class="d-flex flex-column pl-16">
      <v-text-field
        v-model="dates[0]"
        label="Date de debut"
        prepend-icon="mdi-calendar"
        color="antiBackground"
      ></v-text-field>

      <v-text-field
        v-model="dates[1]"
        label="Date de fin"
        prepend-icon="mdi-calendar"
        color="antiBackground"
      ></v-text-field>
    </v-container>
  </v-container>
</template>

<script>
const currentDate = new Date();
const allowedDates = [currentDate, "2025-12-20"];

export default {
  data() {
    return {
      dates: ["", ""],
    };
  },

  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },

  //TODO: fix allowed dates
  methods: {
    getAllowedDates: (val) =>
      allowedDates.indexOf(val) == //!
      -1,
  },
};
</script>