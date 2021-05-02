<template>
  <v-form
    class="log-in"
    ref="form"
    lazy-validation
  >
    <h2 class="title">CarBay</h2>

    <v-text-field
      v-model="authetificators.emailAddress"
      label="Adresse mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="authetificators.password"
      label="Mot de passe"
      type=password
      required
    ></v-text-field>

    <v-btn
      color="primary"
      class="mr-4"
      @click="authentificate(authetificators)"
    >
      Connexion
    </v-btn> 
  </v-form>
</template>
<script>
  import { signin } from "@/api/clients";
  export default {
    data: () => ({
      authetificators :{
        emailAddress: "",
        password: ""
      },
    }),

    methods: {
      authentificate : async function authentificate(authetificators) {
        await signin(authetificators)
      }
    },


  }
</script>
<style scoped>
.log-in{
    width: 30%;
    margin: auto;
    border-radius: 15px;
    padding: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>