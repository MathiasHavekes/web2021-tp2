<template>
  <v-form
    class="log-in"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h2 class="title">CarBay</h2>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Adresse mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Mot de passe"
      type=password
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="valider"
    >
      Connexion
    </v-btn> 
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'Champ obligatoire !',
        v => /.+@.+\..+/.test(v) || 'E-mail invalide',
      ],
      password:'',
      passwordRules: [
        v => !!v || 'Champ obligatoire !',         
      ],
    }),

    methods: {
      valider () {
        this.$refs.form.valider()
      },
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