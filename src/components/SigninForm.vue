<template>
  <v-form
    class="log-in"
    ref="form"
    v-model="valid"
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

    <v-btn type="submit" color="primary" class="mr-4"> Connexion </v-btn>
  </v-form>
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
.log-in {
  width: 30%;
  margin: auto;
  border-radius: 15px;
  padding: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>