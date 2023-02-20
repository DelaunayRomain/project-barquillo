<template>
  <section class="show-furniture">
    <p>Hace click en el espacio para personalizar</p>
    <ul>
      <keep-alive
        ><separators
          v-for="shelf in shelfs"
          :key="shelf.id"
          :shelf="shelf"
        ></separators
      ></keep-alive>
    </ul>
    <span
      ><router-link to="/create-furniture">etapa anterior</router-link
      ><router-link @click="generateSeparators" to="/add-hardware"
        >proxima etapa</router-link
      ></span
    >
  </section>
</template>

<script>
import Separators from '../components/furniture/Separators.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Separators },
  computed: {
    ...mapGetters(['shelfs', 'insideSeparators', 'stages']),
  },
  methods: {
    generateSeparators() {
      this.shelfs.forEach((shelf) => {
        shelf.widthOfEachSeparator = [];
        this.pushSeparatorsWidth(shelf);
        this.pushRemainingWidth(shelf);
      });
      this.unlockNextPage();
    },
    pushSeparatorsWidth(shelf) {
      for (let i = 0; i < shelf.insideSeparators.amountOfSeparators; i++) {
        shelf.widthOfEachSeparator.push(
          shelf.insideSeparators.widthInPercentaje
        );
      }
    },
    pushRemainingWidth(shelf) {
      shelf.widthOfEachSeparator.push(
        100 - shelf.widthOfEachSeparator.reduce((width, acc) => acc + width, 0)
      );
    },
    unlockNextPage() {
      this.stages.addHardware = true;
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
