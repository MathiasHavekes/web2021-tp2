<template>
  <v-layout row>
    <v-spacer />
    <v-flex xs10 md6 lg4>
      <v-layout column>
        <v-spacer />

        <SignupForm class="my-12" />
        <SigninIfAccountExist class="my-12" />

        <v-spacer />
      </v-layout>
    </v-flex>
    <v-spacer />
  </v-layout>
</template>

<script>
import SignupForm from "@/components/SignupForm";
import SigninIfAccountExist from "@/components/SigninIfAccountExist";

export default {
  components: {
    SignupForm: SignupForm,
    SigninIfAccountExist: SigninIfAccountExist,
  },
};
</script>
