<template>
  <v-card color="secondary">
    <v-form
      v-model="valid"
      lazy-validation
      @submit.prevent="createUser(credentials)"
    >
      <v-layout class="my-12" row>
        <v-spacer />
        <v-flex xs10 md8 lg6>
          <v-layout column>
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
              color="antiBackground"
              wrap
              :rules="[(v) => !!v || 'Vous devez accepter pour continuer!']"
              label="Cliquer pour valider l'inscription"
              required
            ></v-checkbox>

            <v-btn
              type="submit"
              :disabled="!valid"
              color="background"
              class="btn-connexion"
              large
            >
              Valider
            </v-btn>
          </v-layout>
        </v-flex>
        <v-spacer />
      </v-layout>
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

