<template>
  reference
  <router-link to="/create-furniture" @click="unlockNextPage">
    proxima etapa</router-link
  >
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['stages']),
  },
  methods: {
    unlockNextPage() {
      this.stages.createFurniture = true;
    },
  },
};
</script>

<style scoped></style>
