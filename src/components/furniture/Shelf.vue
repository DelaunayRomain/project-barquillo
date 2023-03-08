<template>
  <div v-if="logic === 'shelfHeightLogic'">
    <shelf-height-logic
      :myShelf="myShelf"
      :style="cssStyle"
      class="shelf"
    ></shelf-height-logic>
  </div>
  <div v-if="logic === 'renderSpaces'">
    <space
      v-for="space in myShelf.insideSpaces.spaces"
      :key="space.id"
      :mySpace="space"
      :shelf="myShelf"
      :totalWidth="totalWidth"
      class="shelf"
    ></space>
  </div>
</template>

<script>
import ShelfHeightLogic from '../logic/ShelfHeightLogic.vue';
import Space from './Space.vue';
import { mapGetters } from 'vuex';
export default {
  components: { ShelfHeightLogic, Space },
  props: ['myShelf', 'logic'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['totalWidth', 'totalHeight', 'shelfs']),
    cssStyle() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.myShelf.height * 3 + 'px',
      };
    },
  },
  methods: {},
};
</script>

<style scoped>
.shelf {
  margin-left: 5rem;
  border: 2px solid rgb(117, 62, 14);
}
</style>
