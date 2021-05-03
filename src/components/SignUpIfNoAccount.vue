<template>
  <v-card class="container">
    <div class="signupifnoaccount">
    <h2 class="title">
        Vous n'avez pas de compte?
    </h2>
    
    <br>

    <v-btn
      color="primary"
      class="mr-4"
      to="/signup"
    >
      Inscrivez-vous
    </v-btn> 
    </div>
  </v-card>
</template>

<script>

</script>

<style scoped>
.container{
  width: 30%;
  margin-bottom: 5%;
  border-radius: 10px;
}

.signupifnoaccount{
    margin-left: 35%;
}
.title{
    margin-left: 0%;
}
</style>
