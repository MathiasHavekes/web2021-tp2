<template>
  <v-card>
    <v-form class="informationsForm" ref="form" v-model="valid" lazy-validation>
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
        Sauvegarder
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
import { getUserInformation } from "@/api/clients";
export default {
  data: () => ({
    client: {
      surname: "",
      name: "",
      emailAddress: "",
      password: "",
      phoneNumber: "",
    },
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
      this.information = await getUserInformation("Mathias.Havekes@gmail.Com");
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
  width: 30%;
  margin: auto;
  padding: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>