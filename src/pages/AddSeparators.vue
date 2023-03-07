<template>
  <section class="show-furniture">
    <h1>Elige donde poner los separadores</h1>
    <ul>
      <keep-alive
        ><shelf
          v-for="shelf in shelfs"
          :key="shelf.id"
          :myShelf="shelf"
          logic="renderSpaces"
        ></shelf
      ></keep-alive>
    </ul>
    <span
      ><router-link class="arrow left" to="/create-furniture"
        >&larr;</router-link
      ><router-link
        class="arrow right"
        @click="unlockNextPage"
        to="/add-hardware"
        >&rarr;</router-link
      ></span
    >
  </section>
</template>

<script>
import Shelf from '../components/furniture/Shelf.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Shelf },
  computed: {
    ...mapGetters(['shelfs', 'stages']),
  },
  methods: {
    unlockNextPage() {
      this.stages.addHardware = true;
    },
  },
};
</script>

<style scoped>
.show-furniture {
  float: right;
  width: 58vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  margin-left: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  background-color: white;
}

.arrow {
  text-decoration: none;
  color: black;
  font-size: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
}

.left {
  float: left;
}

.right {
  float: right;
}
</style>
