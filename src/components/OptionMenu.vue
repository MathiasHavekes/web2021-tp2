<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-switch
        v-model="$vuetify.theme.dark"
        append-icon="mdi-brightness-6"
        inset
        persistent-hint
        ></v-switch>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  },
};
</script>
