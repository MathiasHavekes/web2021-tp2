<template>
  <v-form
    class="informationsForm"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h2 class="title">Votre compte</h2>

    <v-text-field
      v-model="information.surname"
      label="Prénom"
      :rules="nameRules"
      required
    ></v-text-field>

    <v-text-field
      v-model="information.name"
      :rules="nameRules"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="information.emailAddress"
      label="Adresse mail"
      required
      readonly
    ></v-text-field>

    <v-text-field
      v-model="information.phoneNumber"
      label="Numéro de téléphone"
      required
      readonly
    ></v-text-field>

    <v-text-field
      v-model="information.password"
      :rules="passwordRules"
      label="password"
      :append-icon="value ? 'Aa' : '•'"
      @click:append="() => (value = !value)"
      :type="value ? 'password' : 'text'"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="valider(information)"
    >
      Sauveguarder
    </v-btn> 
  </v-form>
</template>
<script>
import { getcurrentinformation } from "@/api/clients";
  export default {
    data: () => ({
      information: {},
      value: String,
      valid: true,

      passwordRules: [
        v => !!v || 'Champ obligatoire !',
        v => (v && v.length >= 8) || 'Votre mot de passe doit contenir au moins 8 caractères!',         
      ],

      nameRules: [
        v => !!v || 'Champ obligatoire !',     
      ],
    }),

    methods: {
      valider (information) {
        console.log(information);
    },
    
    async created() {
      this.information = await getcurrentinformation("mh@exemple.com");
      }
    },
  }
</script>
<style >
.title{
    margin-left: 35%;
    width: 50%;
}

.informationsForm{
    width: 30%;
    margin: auto;
    padding: 20px;
    margin-top: 5%;
    margin-bottom: 5%;  
}
</style>