<template>
  <v-card class="container" color="secondary">
    <v-form v-model="valid" lazy-validation>
      <h2 class="title">Votre compte</h2>

      <v-text-field
        color="antiBackground"
        v-model="userInfo.surname"
        label="Prénom"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="userInfo.name"
        :rules="nameRules"
        color="antiBackground"
        label="Nom"
        required
      ></v-text-field>

      <v-text-field
        v-model="userInfo.emailAddress"
        label="Adresse mail"
        color="antiBackground"
        required
        readonly
      ></v-text-field>

      <v-text-field
        v-model="userInfo.phoneNumber"
        label="Numéro de téléphone"
        color="antiBackground"
        required
        readonly
      ></v-text-field>

      <v-text-field
        v-model="userInfo.password"
        :rules="passwordRules"
        color="antiBackground"
        label="Nouveau mot de passe"
        :append-icon="value ? 'Aa' : '•'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="background" class="btn-sauvegarde">
        Sauvegarder
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
export default {
  props: {
    userInfo: Object,
  },

  data: () => ({
    value: String,
    valid: true,

    passwordRules: [
      (v) => !!v || "Champ obligatoire !",
      (v) =>
        (v && v.length >= 8) ||
        "Votre mot de passe doit contenir au moins 8 caractères!",
    ],

    nameRules: [(v) => !!v || "Champ obligatoire !"],
  }),

  methods: {},
  created() {
    console.log(this.userInfo);
  },
};
</script>
