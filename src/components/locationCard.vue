<template>
  <v-card
    class=parent
    max-width="313"
    color="secondary"

  >
    <v-img
      src="../assets/images_bd/tesla_model_s.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
        Numéro de la location :
      {{ location.id }}
    </v-card-title>

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
          Date de début : {{ location.dateDebut }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          Date de fin : {{ location.dateFin }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          Durée : {{ location.durée }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          Prix total : {{ location.price }}$
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          Centre d'arrivée : {{ location.centreDepot }}
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
      location: Object,
    },
  }
</script>