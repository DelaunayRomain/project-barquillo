<template>
  <h1>Selectiona que tipo de mueble quieres diseñar</h1>
  <div class="furniture">
    <h2 class="furniture--name">Librero unitario</h2>
    <img
      class="furniture--img"
      src="./../assets/img/librero-unitario.jpeg"
      alt=""
    />
  </div>
  <div class="furniture">
    <h2 class="furniture--name">Pronto otras opciones...</h2>
    <img class="furniture--img" src="" alt="" />
  </div>
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
