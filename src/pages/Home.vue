<template>
  <h1>Muebles barquillo</h1>
  <h3>Dibuja tu mueble soñado!</h3>
  <router-link @click="stages.reference = true" to="/reference"
    >empezar</router-link
  >
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['stages']),
  },
};
</script>
