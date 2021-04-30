<template>
<div>
  <SignupForm />
  <SigninIfAccountExist />
</div>
</template>

<script>
import SignupForm from "../components/SignupForm"
import SigninIfAccountExist from "../components/SigninIfAccountExist"

export default {
  components: {
    SignupForm : SignupForm ,
    SigninIfAccountExist : SigninIfAccountExist
  }
};
</script>
