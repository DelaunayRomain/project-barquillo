<template>
  <div>
    <div class="shelf-height" :style="cssStyle" @click="update = true">
      <div v-if="update">
        <input
          type="number"
          v-model="newHeight"
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
      newHeight: null,
    };
  },
  computed: {
    ...mapGetters(['totalWidth', 'shelfs', 'totalHeight']),
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
    newHeightForUnconfirmedShelfs() {
      const amountOfUnconfirmedShelfs = this.shelfs.filter(
        (shelf) => shelf.confirmed === false
      ).length;
      const confirmedShelfsTotalHeight = this.shelfs
        .filter((shelf) => shelf.confirmed === true)
        .reduce((acc, shelf) => acc + shelf.height, 0);
      return (
        (this.totalHeight - confirmedShelfsTotalHeight) /
        amountOfUnconfirmedShelfs
      );
    },
    controlUserHeight() {
      return !(this.newHeight && this.newHeight > 0);
    },
  },
  methods: {
    updateShelfHeight() {
      if (this.controlUserHeight) return;
      const identifiedShelf = this.shelfs.find(
        (shelf) => shelf.id === this.shelf.id
      );
      identifiedShelf.height = this.newHeight;
      identifiedShelf.confirmed = true;
    },
    updateOtherShelfsHeights() {
      this.shelfs.forEach((shelf) => {
        if (shelf.confirmed === false)
          shelf.height = this.newHeightForUnconfirmedShelfs;
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
