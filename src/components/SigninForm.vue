<template>
  <v-card class="container" color="secondary">
    <v-form
      class="log-in"
      ref="form"
      lazy-validation
      @submit.prevent="authentificate(credentials)"
    >
      <h2 class="title">CarBay</h2>

      <v-text-field
        v-model="credentials.emailAddress"
        label="Adresse mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="credentials.password"
        label="Mot de passe"
        type="password"
        required
      ></v-text-field>

      <v-btn type="submit" color="primary" class="btn-connexion">
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
    authentificate: async function authentificate(credentials) {
      await signin(credentials);
    },
  },
};
</script>
<style scoped>
.containers {
  margin-top: 5%;
  width: 30%;
  border-radius: 10px;
}

.log-in {
  width: 70%;
  margin: auto;
  padding: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.btn-connexion {
  margin-left: 30%;
}
</style>