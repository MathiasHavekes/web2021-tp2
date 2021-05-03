<template>
  <div>
    <SigninForm />
    <SignUpIfNoAccount />
  </div>
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



