<template>
  <v-card class="container">
    <v-form class="informationsForm" ref="form" v-model="valid" lazy-validation>
      <h2 class="title">Votre compte</h2>

    <v-text-field
      color="antiBackground"
      v-model="information.surname"
      label="Prénom"
      :rules="nameRules"
      required
    ></v-text-field>

    <v-text-field
      v-model="information.name"
      :rules="nameRules"
      color="antiBackground"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="information.emailAddress"
      label="Adresse mail"
      color="antiBackground"
      required
      readonly
    ></v-text-field>

    <v-text-field
      v-model="information.phoneNumber"
      label="Numéro de téléphone"
      color="antiBackground"
      required
      readonly
    ></v-text-field>

    <v-text-field
      v-model="information.password"
      :rules="passwordRules"
      color="antiBackground"
      label="password"
      :append-icon="value ? 'Aa' : '•'"
      @click:append="() => (value = !value)"
      :type="value ? 'password' : 'text'"
      required
    ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="primary"
        class="btn-sauvegarde"
        @click="valider(information)"
      >
        Sauvegarder
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
import { getUserInformation } from "@/api/clients";
export default {
  data: () => ({
    information: Object,
    value: String,
    valid: true,

    passwordRules: [
      (v) => !!v || "Champ obligatoire !",
      (v) =>
        (v && v.length >= 8) ||
        "Votre mot de passe doit contenir au moins 8 caractères!",
    ],

    nameRules: [(v) => !!v || "Champ obligatoire !"],
  }),

  methods: {
    valider(information) {
      console.log(information);
    },

    async created() {
      this.information = await getUserInformation("608f5641fdb52a393f7dac84");
    },
  },
};
</script>
<style >
.title {
  margin-left: 35%;
  width: 50%;
}

.informationsForm {
  width: 70%;
  margin: auto;
  padding: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.container{
  margin-top: 5%;
  width: 30%;
  border-radius: 10px;
}

.btn-sauvegarde{
    margin-left: 30%;
}
</style>