<template>
  <v-form class="sign-up-form" ref="form" v-model="valid" lazy-validation>
    <h2 class="title">CarBay</h2>

    <v-text-field
      v-model="client.surname"
      label="Prénom"
      :rules="nameRules"
      required
    ></v-text-field>

    <v-text-field
      v-model="client.name"
      :rules="nameRules"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="client.emailAddress"
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
      v-model="client.phoneNumber"
      label="Numéro de téléphone"
      required
    ></v-text-field>

    <v-checkbox
      :rules="[(v) => !!v || 'Vous devez accepter pour continuer!']"
      label="En cliquant sur Inscription, vous acceptez nos conditions, notre politique de données et notre politique de cookies."
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="createUser(client)"
    >
      Inscription
    </v-btn>
  </v-form>
</template>

<script>
import { signup } from "@/api/clients";
export default {
  data: () => ({
    client: {
      surname: "",
      name: "",
      emailAddress: "",
      password: "",
      phoneNumber: "",
    },
    value: String,
    valid: false,

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
    createUser: async function createUser(client) {
      await signup(client);
    },
  },
};
</script>

<style >
.title {
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