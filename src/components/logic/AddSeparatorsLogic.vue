<template>
  <div @click="updateSeparatorsInShelf" class="flex-container">
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
    cssStyleContainer() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.shelf.height * 3 + 'px',
        backgroundColor:
          this.identifiedShelf.insideSpaces.isUpdating === true
            ? 'rgba(109, 206, 128, 0.2)'
            : '',
      };
    },
    widthVariationRelatedToTypeOfSeparator() {
      const objectTypeSeparators = {
        centered: 0,
        left: -12 / this.insideSpaces.amountOfSeparators,
        right: 12 / this.insideSpaces.amountOfSeparators,
      };
      return objectTypeSeparators[this.insideSpaces.typeOfSeparators];
    },
    spaceWidth() {
      const objectSpaceWidth = {
        0: 100,
        1: 50 + this.widthVariationRelatedToTypeOfSeparator,
        2: 33.3 + this.widthVariationRelatedToTypeOfSeparator,
        3: 25 + this.widthVariationRelatedToTypeOfSeparator,
      };
      return objectSpaceWidth[String(this.insideSpaces.amountOfSeparators)];
    },
  },
  methods: {
    updateSeparatorsInShelf() {
      this.identifiedShelf.insideSpaces.isUpdating = true;
    },
  },
};
</script>

<style scoped>
.shelf {
  margin-left: 5rem;
  border: 2px solid rgb(117, 62, 14);
}
.flex-container {
  display: flex;
  align-items: center;
}
</style>
