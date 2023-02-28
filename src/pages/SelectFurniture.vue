<template>
  <h1>Selectiona que tipo de mueble quieres diseñar</h1>
  <router-link class="furniture" to="/create-furniture" @click="unlockNextPage">
    <h2 class="furniture--name">Librero unitario</h2>
    <img
      class="furniture--img"
      src="./../assets/img/librero-unitario.jpeg"
      alt=""
  /></router-link>
  <div class="furniture">
    <h2 class="furniture--name">Pronto otras opciones...</h2>
  </div>
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

<style scoped>
h1 {
  text-align: center;
}
.furniture {
  width: 30vw;
  height: 70vh;
  border-radius: 3px;
  border: solid;
  position: relative;
  margin: 1rem;
  display: inline-block;
  text-decoration: none;
  color: black;
}

.furniture--name {
  text-align: center;
}

.furniture--img {
  position: absolute;
  left: 50%;
  max-width: 90%;
  max-height: 80%;
  border-radius: 5px;
  transform: translateX(-50%);
}
</style>
