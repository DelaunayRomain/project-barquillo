<template>
  <section class="show-furniture">
    <p>Hace click en el espacio para personalizar</p>
    <ul>
      <keep-alive
        ><separators-widths
          v-for="shelf in shelfHeights"
          :key="shelf.id"
          :shelf="shelf"
        ></separators-widths
      ></keep-alive>
    </ul>
    <span
      ><router-link to="/shelfs">etapa anterior</router-link
      ><router-link @click="confirmSeparators" to="/hardware"
        >proxima etapa</router-link
      ></span
    >
  </section>
</template>

<script>
import SeparatorsWidths from '../components/furniture/SeparatorsWidths.vue';
import { mapGetters } from 'vuex';
export default {
  components: { SeparatorsWidths },
  computed: {
    ...mapGetters(['shelfHeights', 'insideSeparators', 'stages']),
  },
  methods: {
    confirmSeparators() {
      this.stages.hardware = true;
      this.shelfHeights.forEach((shelf) => {
        shelf.widthOfEachSeparator = [];
        for (let i = 0; i < shelf.insideSeparators.amountOfSeparators; i++) {
          shelf.widthOfEachSeparator.push(
            shelf.insideSeparators.widthInPercentaje
          );
        }
        shelf.widthOfEachSeparator.push(
          100 -
            shelf.widthOfEachSeparator.reduce((width, acc) => acc + width, 0)
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
