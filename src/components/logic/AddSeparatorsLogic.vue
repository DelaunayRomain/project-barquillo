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
    computedAmountOfSeparators() {
      return this.myShelf.insideSpaces.amountOfSeparators;
    },
  },
  methods: {
    updateSeparatorsInShelf() {
      if (
        !this.shelfs.some((shelf) => shelf.insideSpaces.isUpdating === true)
      ) {
        this.shelfs.forEach((shelf) => (shelf.insideSpaces.isUpdating = false));
        this.insideSpaces.isUpdating = true;
        this.shelfs.find(
          (shelf) => shelf.id === this.shelf.id
        ).isUpdating = true;
        this.$emit('updateSeparators', this.shelf);
      }
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
