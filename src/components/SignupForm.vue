<template>
  <v-card color="secondary">
    <v-form
      v-model="valid"
      lazy-validation
      @submit.prevent="createUser(credentials)"
    >
      <h2 class="title">Créer un compte</h2>

      <v-text-field
        v-model="credentials.surname"
        label="Prénom"
        :rules="nameRules"
        color="antiBackground"
        required
      ></v-text-field>

      <v-text-field
        v-model="credentials.name"
        :rules="nameRules"
        label="Nom"
        color="antiBackground"
        required
      ></v-text-field>

      <v-text-field
        v-model="credentials.emailAddress"
        :rules="emailRules"
        label="Adresse mail"
        color="antiBackground"
        required
      >
      </v-text-field>

      <v-text-field
        v-model="credentials.password"
        :rules="passwordRules"
        label="Mot de passe"
        color="antiBackground"
        :append-icon="value ? 'Aa' : '•'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        required
      ></v-text-field>

      <v-text-field
        v-model="credentials.phoneNumber"
        label="Numéro de téléphone"
        color="antiBackground"
        required
      ></v-text-field>

      <v-checkbox
        :rules="[(v) => !!v || 'Vous devez accepter pour continuer!']"
        label="En cliquant sur Inscription, vous acceptez nos conditions, notre politique de données et notre politique de cookies."
        required
      ></v-checkbox>

      <v-btn
        type="submit"
        :disabled="!valid"
        color="background"
        class="btn-connexion"
      >
        Valider
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import { signup } from "@/api/clients";

export default {
  data: () => ({
    credentials: {
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
    createUser: async function createUser(credentials) {
      let inserted = await signup(credentials);
      console.log(inserted);

      if (inserted.isInserted) {
        this.$router.push("/user/signin");
        this.$store.commit("setAlert", {
          type: "success",
          message: "Compte crée, vouz pouvez vous connecter",
          isVisible: true,
        });
      } else {
        this.$store.commit("setAlert", {
          type: "error",
          message: "Identifiants déjà utilisés, veuillez réessayer",
          isVisible: true,
        });
      }
    },
  },
};
</script>

