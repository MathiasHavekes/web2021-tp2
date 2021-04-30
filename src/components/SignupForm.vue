<template>
  <v-form class="sign-up-form" ref="form" v-model="valid" lazy-validation>
    <h2 class="title">CarBay</h2>

    <v-text-field
      v-model="client.prénom"
      label="Prénom"
      :rules="nameRules"
      required
    ></v-text-field>

    <v-text-field
      v-model="client.nom"
      :rules="nameRules"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="client.email"
      :rules="emailRules"
      label="Adresse mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="client.password"
      :rules="passwordRules"
      label="Mot de passe"
      :append-icon="value ? 'Aa' : '•'"
      @click:append="() => (value = !value)"
      :type="value ? 'password' : 'text'"
      required
    ></v-text-field>

    <v-text-field
      v-model="client.téléphone"
      label="Numéro de téléphone"
      required
    ></v-text-field>

    <v-checkbox
      :rules="[(v) => !!v || 'Vous devez accepter pour continuer!']"
      label="En cliquant sur Inscription, vous acceptez nos conditions, notre politique de données et notre politique de cookies."
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="primary" class="mr-4" @click="valider()">
      Inscription
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    client: {
      prénom: "",
      nom: "",
      email: "",
      password: "",
      téléphone: "",
    },
    value: String,
    valid: true,

    emailRules: [
      (v) => !!v || "Champ obligatoire !",
      (v) => /.+@.+\..+/.test(v) || "Adresse mail invalide",
    ],

    passwordRules: [
      (v) => !!v || "Champ obligatoire !",
      (v) =>
        (v && v.length >= 8) ||
        "Votre mot de passe doit contenir au moins 8 caractères!",
    ],

    nameRules: [(v) => !!v || "Champ obligatoire !"],
  }),

  methods: {
    valider() {
      this.$refs.form.valider();
    },
  },
};
</script>

<style >
.title {
  margin-left: 70%;
  width: 10%;
}

.sign-up-form {
  width: 30%;
  margin: auto;
  padding: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>