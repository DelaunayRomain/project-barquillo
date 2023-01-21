<template>
  <section class="show-furniture">
    <p>Hace click en el espacio para personalizar</p>
    <ul>
      <space-widths
        v-for="space in heights"
        :key="space.id"
        :space="space"
      ></space-widths>
    </ul>
    <span><router-link to="/hardware">proxima etapa</router-link></span>
  </section>
</template>

<script>
import SpaceWidths from '../components/furniture/SpaceWidths.vue';
import { mapGetters } from 'vuex';
export default {
  components: { SpaceWidths },
  computed: {
    ...mapGetters(['heights']),
  },
};
</script>

<style scoped>
.show-furniture {
  float: right;
  width: 800px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  margin: 1rem 0;
}
</style>
