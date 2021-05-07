<template>
  <v-layout row align-center class="ma-0">
    <v-flex xs12 md7 lg7>
      <v-date-picker
        v-model="dates"
        range
        :allowed-dates="getAllowedDates"
        header-color="primary"
        light
      ></v-date-picker>
    </v-flex>

    <v-flex xs10 md5 lg5>
      <v-layout column>
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
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
const currentDate = new Date();
const allowedDates = [currentDate, "2025-12-20"];

export default {
  props: {
    value: {
      type: Array,
      default: () => ["", ""],
    },
  },

  data() {
    return {
      dates: this.value,
    };
  },

  watch: {
    value: {
      deep: true,
      handler() {
        this.dates = this.value;
      },
    },
    dates: {
      deep: true,
      handler() {
        this.$emit("input", this.dates);
      },
    },
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