<template>
  <shelf-height-logic
    v-if="logic === 'shelfHeightLogic'"
    :myShelf="myShelf"
    :style="cssStyle"
    class="shelf"
  ></shelf-height-logic>
</template>

<script>
import ShelfHeightLogic from '../logic/ShelfHeightLogic.vue';
import { mapGetters } from 'vuex';
export default {
  components: { ShelfHeightLogic },
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
