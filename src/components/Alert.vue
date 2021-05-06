<template>
  <v-alert
    class="alert-container"
    :value="alert.isVisible"
    :type="alert.type"
    dismissible
  >
    {{ alert.message }}
  </v-alert>
</template>

<script>
export default {
  computed: {
    alert() {
      return this.$store.getters.getCurrentAlert;
    },
  },

  watch: {
    alert(new_val) {
      if (new_val) {
        setTimeout(() => (this.alert.isVisible = false), 5000);
      }
    },
  },
};
</script>

<style scoped>
.alert-container {
  position: fixed;
  top: 64px;
  left: 2em;
  right: 2em;
  margin-top: 1em;
  z-index: 100;
}
</style>