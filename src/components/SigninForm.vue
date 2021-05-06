<template>
  <v-card class="container" color="secondary">
    <v-form lazy-validation @submit.prevent="authentificate(credentials)">
      <h2 class="title">Se connecter</h2>

      <v-text-field
        v-model="credentials.emailAddress"
        label="Adresse mail"
        required
        color="antiBackground"
      ></v-text-field>

      <v-text-field
        v-model="credentials.password"
        label="Mot de passe"
        type="password"
        color="antiBackground"
        required
      ></v-text-field>

      <v-btn type="submit" color="background" class="btn-connexion">
        Connexion
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
import { signin } from "@/api/clients";

export default {
  data: () => ({
    credentials: {
      emailAddress: "",
      password: "",
    },
  }),

  methods: {
    authentificate: async function (credentials) {
      let connected = await signin(credentials);

      if (connected.isConnected) {
        localStorage.setItem("connected", true);
        this.$router.push("/");
        this.$store.commit("setAlert", {
          type: "success",
          message:
            "Bonjour " + connected.userFullName + " ! Bienvenue sur CarBay",
          isVisible: true,
        });
      } else {
        this.$store.commit("setAlert", {
          type: "error",
          message: "Mauvais identifiants",
          isVisible: true,
        });
      }
    },
  },
};
</script>
