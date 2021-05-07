<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list color="background">
      <v-list-item-group>
        <v-switch
          class="mx-5"
          v-model="$vuetify.theme.dark"
          append-icon="mdi-brightness-6"
          inset
          persistent-hint
          color="antiPrimary"
        ></v-switch>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>



