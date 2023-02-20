<template>
  <div>
    <div class="shelf-height" :style="cssStyle" @click="openUpdateModal">
      <div v-if="isUpdating">
        <input
          type="number"
          v-model="newHeight"
          :placeholder="shelf.height"
        /><span>cm</span>
      </div>
      <p v-else>{{ shelf.height }} cm</p>
    </div>
    <div class="button">
      <button v-if="isUpdating" @click="updateFurniture">OK</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['shelf'],
  data() {
    return {
      isUpdating: false,
      newHeight: null,
      shelfs: [...this.$store.state.furniture.shelfs],
    };
  },
  computed: {
    ...mapGetters(['totalWidth', 'totalHeight']),
    cssStyle() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.shelf.height * 3 + 'px',
        backgroundColor: this.isUpdating
          ? 'rgba(117, 62, 14, 0.2)'
          : this.shelf.confirmed
          ? 'rgba(109, 206, 128, 0.2)'
          : '',
      };
    },
    newHeightForUnconfirmedShelfs() {
      return (
        (this.totalHeight - this.confirmedShelfsTotalHeight) /
        this.amountOfUnconfirmedShelfs
      );
    },
    amountOfUnconfirmedShelfs() {
      return this.shelfs.filter((shelf) => shelf.confirmed === false).length;
    },
    confirmedShelfsTotalHeight() {
      return this.shelfs
        .filter((shelf) => shelf.confirmed === true)
        .reduce((acc, shelf) => acc + shelf.height, 0);
    },
    isValidHeight() {
      return this.newHeight && this.newHeight > 0;
    },
    identifiedShelf() {
      return this.shelfs.find((shelf) => shelf.id === this.shelf.id);
    },
  },
  methods: {
    updateFurniture() {
      this.updateShelfHeight();
      this.updateOtherShelfsHeights();
      this.updateShelfsInStore();
      this.isUpdating = false;
    },
    updateShelfHeight() {
      if (!this.isValidHeight) return;
      this.identifiedShelf.height = this.newHeight;
      this.identifiedShelf.confirmed = true;
    },
    updateOtherShelfsHeights() {
      this.shelfs.forEach((shelf) => {
        if (shelf.confirmed === false)
          shelf.height = this.newHeightForUnconfirmedShelfs;
      });
    },
    updateShelfsInStore() {
      this.$store.state.furniture.shelfs = this.shelfs;
    },
    openUpdateModal() {
      this.isUpdating = true;
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
