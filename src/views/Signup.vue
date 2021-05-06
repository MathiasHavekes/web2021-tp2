<template>
  <v-container>
    <SignupForm />
    <SigninIfAccountExist />
  </v-container>
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
