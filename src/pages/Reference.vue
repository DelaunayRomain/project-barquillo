<template>
  reference
  <router-link to="/general" @click="stages.general = true">
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
