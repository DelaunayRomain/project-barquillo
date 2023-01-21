<template>
  <h1>Muebles barquillo</h1>
  <h3>Dibuja tu mueble soñado!</h3>
  <router-link :to="stages[actualStage]">empezar</router-link>
</template>

<script>
export default {
  computed: {
    actualStage() {
      return this.$store.getters.actualStage;
    },
    stages() {
      return this.$store.getters.stages;
    },
  },
};
</script>
