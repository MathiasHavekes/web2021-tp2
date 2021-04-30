<template>
  <v-card
    class="ma-5"
    max-width="350"
    color="secondary"
  >
    <v-img
      :src="car.src"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ car.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ car.price }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>
        + Infos
      </v-btn>

      <v-spacer/>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ car.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      }
    },

    props: {
      car: Object,
    },
  }
</script>