<template>
  <v-card color="secondary">
    <v-form v-model="valid">
      <v-layout row>
        <v-spacer />
        <v-flex xs10 md8 lg6>
          <v-layout column class="my-12">
            <h2>Votre compte</h2>

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

            <v-text-field
              :rules="passwordConfirmationRules"
              label="Confirmez votre mot de passe"
              color="antiBackground"
              :append-icon="valueConfirmed ? 'Aa' : '•'"
              @click:append="() => (valueConfirmed = !valueConfirmed)"
              :type="valueConfirmed ? 'password' : 'text'"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="background"
              @click="updateInfo(userInfo)"
            >
              Sauvegarder
            </v-btn>
          </v-layout>
        </v-flex>
        <v-spacer />
      </v-layout>
    </v-form>
  </v-card>
</template>
<script>
import { savenewinformation } from "@/api/clients";

export default {
  props: {
    userInfo: Object,
  },

  data() {
    return {
      value: String,
      valueConfirmed: String,
      valid: false,

      passwordRules: [
        (v) => !!v || "Champ obligatoire !",
        (v) =>
          (v && v.length >= 8) ||
          "Votre mot de passe doit contenir au moins 8 caractères!",
      ],

      passwordConfirmationRules: [
        (v) => !!v || "Champ obligatoire !",
        (v) =>
          v === this.userInfo.password ||
          "Les mots de passe ne correspondent pas.",
      ],

      nameRules: [(v) => !!v || "Champ obligatoire !"],
    };
  },

  methods: {
    updateInfo: async function updateinfo(userInfo) {
      let isUpdated = await savenewinformation(userInfo);
      if (isUpdated) {
        this.$store.commit("setAlert", {
          type: "success",
          message: "Vos informations ont été mises à jour !",
          isVisible: true,
        });
      }
    },
  },
};
</script>
