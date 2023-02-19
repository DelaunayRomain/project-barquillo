<template>
  reference
  <router-link to="/shelfs" @click="stages.shelfs = true">
    proxima etapa</router-link
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

<style scoped></style>
