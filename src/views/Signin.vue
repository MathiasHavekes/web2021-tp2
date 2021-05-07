<template>
  <v-layout row fill-height>
    <v-spacer />
    <v-flex xs10 md6 lg4>
      <v-layout column>
        <v-spacer />

        <SigninForm class="my-12" />
        <SignUpIfNoAccount class="my-12" />

        <v-spacer />
      </v-layout>
    </v-flex>
    <v-spacer />
  </v-layout>
</template>

<script>
import SigninForm from "@/components/SigninForm";
import SignUpIfNoAccount from "@/components/SignUpIfNoAccount";

export default {
  components: {
    SigninForm: SigninForm,
    SignUpIfNoAccount: SignUpIfNoAccount,
  },
};
</script>



