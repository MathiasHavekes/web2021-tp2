<template>
  <v-form
    class="informationsForm"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h2 class="title">Votre compte</h2>

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
      label="Adresse mail"
      required
      readonly
    ></v-text-field>

    <v-text-field
      v-model="client.téléphone"
      label="Numéro de téléphone"
      required
      readonly
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

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="valider(client)"
    >
      Sauveguarder
    </v-btn> 
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      client :{
      prénom: "",
      nom : "",
      email: "",
      password:"",
      téléphone: '',
      },
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
      valider (client) {
        console.log(client)
        this.$refs.form.valider()
      },
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