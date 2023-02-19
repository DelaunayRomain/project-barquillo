<template>
  <div>
    <div class="shelf-height" :style="cssStyle" @click="update = true">
      <div v-if="update">
        <input
          type="number"
          v-model="newShelfHeight"
          :placeholder="shelf.height"
        /><span>cm</span>
      </div>
      <p v-else>{{ shelf.height }} cm</p>
    </div>
    <div class="button">
      <button v-if="update" @click="updateFurniture">OK</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['shelf'],
  data() {
    return {
      update: false,
      newShelfHeight: null,
    };
  },
  computed: {
    ...mapGetters(['totalWidth', 'shelfHeights', 'totalHeight']),
    cssStyle() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.shelf.height * 3 + 'px',
        backgroundColor: this.update
          ? 'rgba(117, 62, 14, 0.2)'
          : this.shelf.confirmed
          ? 'rgba(109, 206, 128, 0.2)'
          : '',
      };
    },
  },
  methods: {
    updateShelfHeight() {
      if (!(this.newShelfHeight && this.newShelfHeight > 0)) return;
      const identifiedShelf = this.shelfHeights.find(
        (shelf) => shelf.id === this.shelf.id
      );
      identifiedShelf.height = this.newShelfHeight;
      identifiedShelf.confirmed = true;
    },
    updateOtherShelfsHeights() {
      const amountOfUnconfirmedShelfs = this.shelfHeights.filter(
        (shelf) => shelf.confirmed === false
      ).length;
      const confirmedShelfsTotalHeight = this.shelfHeights
        .filter((shelf) => shelf.confirmed === true)
        .reduce((acc, shelf) => acc + shelf.height, 0);
      const newHeightForUnconfirmedShelfs =
        (this.totalHeight - confirmedShelfsTotalHeight) /
        amountOfUnconfirmedShelfs;
      this.shelfHeights.forEach((shelf) => {
        if (shelf.confirmed === false)
          shelf.height = newHeightForUnconfirmedShelfs;
      });
    },
    updateFurniture() {
      this.updateShelfHeight();
      this.updateOtherShelfsHeights();
      this.update = false;
    },
  },
};
</script>

<style scoped>
.shelf-height {
  display: inline-block;
  vertical-align: middle;
  border: 2px solid rgb(117, 62, 14);
}

input {
  margin-top: 10px;
  width: 50px;
}

.button {
  display: inline-block;
  vertical-align: middle;
}
</style>
