<template>
  <section class="show-furniture">
    <p>Hace click en el espacio para personalizar</p>
    <ul>
      <keep-alive
        ><space-widths
          v-for="space in heights"
          :key="space.id"
          :space="space"
        ></space-widths
      ></keep-alive>
    </ul>
    <span
      ><router-link @click="confirmSeparations" to="/hardware"
        >proxima etapa</router-link
      ></span
    >
  </section>
</template>

<script>
import SpaceWidths from '../components/furniture/SpaceWidths.vue';
import { mapGetters } from 'vuex';
export default {
  components: { SpaceWidths },
  computed: {
    ...mapGetters(['heights', 'insideSpaces']),
  },
  methods: {
    confirmSeparations() {
      this.heights.forEach((space) => {
        space.displayInsideSpaces = [];
        for (let i = 0; i < space.insideSpaces.qttySeparations; i++) {
          space.displayInsideSpaces.push(space.insideSpaces.widthInPercentaje);
        }
        space.displayInsideSpaces.push(
          100 -
            space.displayInsideSpaces.reduce(
              (spaceWidth, acc) => acc + spaceWidth,
              0
            )
        );
      });
    },
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
