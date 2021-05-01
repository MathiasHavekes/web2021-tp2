<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-date-picker
        v-model="dates"
        range
        :allowed-dates="getAllowedDates"
        header-color="primary"
        light
      ></v-date-picker>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="dates[0]"
        label="Date range"
        prepend-icon="mdi-calendar"
      ></v-text-field>

      <v-text-field
        v-model="dates[1]"
        label="Date range"
        prepend-icon="mdi-calendar"
      ></v-text-field>
    </v-col>
  </v-row>
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