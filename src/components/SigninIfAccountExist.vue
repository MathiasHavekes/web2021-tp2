<template>
  <v-card class="container">
    <div class="signinifaccountexist">
    <h2 class="title">
        Déjà un compte ?
    </h2>
    
    <br>

    <v-btn
      color="primary"
      class="mr-4"
      to="/user/signin"
    >
      Connetez-vous
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
.signinifaccountexist{
    margin-left: 35%;
}
.title{
    margin: 0%;
}
</style>
