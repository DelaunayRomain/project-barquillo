<template>
  <div
    @click="updateSeparatorsInShelf"
    class="shelf"
    :style="{ backgroundColor: shelfBackgroundColor }"
  >
    <separator-1
      v-if="computedAmountOfSeparators === 1"
      :spaceWidth="spaceWidth"
    ></separator-1>
    <separator-2
      v-if="computedAmountOfSeparators === 2"
      :spaceWidth="spaceWidth"
    ></separator-2>
    <separator-3
      v-if="computedAmountOfSeparators === 3"
      :spaceWidth="spaceWidth"
    ></separator-3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Separator1 from '../furniture/separators/Separator1.vue';
import Separator2 from '../furniture/separators/Separator2.vue';
import Separator3 from '../furniture/separators/Separator3.vue';
export default {
  components: { Separator1, Separator2, Separator3 },
  props: ['myShelf'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['shelfs']),
    identifiedShelf() {
      return this.shelfs.find((shelf) => shelf.id === this.myShelf.id);
    },
    computedAmountOfSeparators() {
      return this.identifiedShelf.insideSpaces.amountOfSeparators;
    },
    shelfBackgroundColor() {
      return this.identifiedShelf.insideSpaces.isUpdating === true
        ? 'rgba(109, 206, 128, 0.2)'
        : '';
    },
    widthVariationRelatedToTypeOfSeparator() {
      const objectTypeSeparators = {
        centered: 0,
        left: -12 / this.insideSpaces.amountOfSeparators,
        right: 10 / this.insideSpaces.amountOfSeparators,
      };
      return objectTypeSeparators[this.insideSpaces.typeOfSeparators];
    },
    spaceWidth() {
      const mapSpaceWidth = new Map([
        ([0, 100],
        [1, 50 + this.widthVariationRelatedToTypeOfSeparator],
        [2, 33.3 + this.widthVariationRelatedToTypeOfSeparator],
        [3, 25 + this.widthVariationRelatedToTypeOfSeparator]),
      ]);
      return mapSpaceWidth.get(this.computedAmountOfSeparators);
    },
  },
  methods: {
    updateSeparatorsInShelf() {
      this.identifiedShelf.insideSpaces.isUpdating = true;
    },
  },
  created() {
    console.log(this.myShelf);
  },
};
</script>

<style scoped>
.shelf {
  width: 100%;
  height: 100%;
}
</style>
