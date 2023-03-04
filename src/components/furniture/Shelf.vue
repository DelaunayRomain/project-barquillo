<template>
  <div class="flex-container">
    <div class="shelf-height" :style="cssStyle" @click="openUpdateModal">
      <div v-if="isUpdating">
        <div class="update-input">
          <input
            type="number"
            v-model="newHeight"
            :placeholder="shelf.height"
          /><span>cm</span>
        </div>
      </div>
      <p v-else>{{ Math.round(shelf.height) }} cm</p>
    </div>
    <button v-if="isUpdating" class="button" @click="updateFurniture">
      OK
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['myShelf', 'id'],
  data() {
    return {
      isUpdating: false,
      newHeight: null,
      shelf: this.myShelf,
    };
  },
  computed: {
    ...mapGetters(['totalWidth', 'totalHeight', 'shelfs']),
    cssStyle() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.shelf.height * 3 + 'px',
        backgroundColor: this.isUpdating
          ? 'rgba(117, 62, 14, 0.2)'
          : this.shelf.confirmed
          ? 'rgba(109, 206, 128, 0.2)'
          : '',
        borderBottom:
          this.id === this.shelfs.length - 1
            ? '2px solid rgb(117, 62, 14)'
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
      this.updateShelfInStore();
      this.isUpdating = false;
    },
    updateShelfHeight() {
      if (!this.isValidHeight) return;
      this.shelf.height = this.newHeight;
      this.shelf.confirmed = true;
    },
    updateOtherShelfsHeights() {
      this.shelfs.forEach((shelf) => {
        if (shelf.confirmed === false)
          shelf.height = this.newHeightForUnconfirmedShelfs;
      });
    },
    updateShelfInStore() {
      this.identifiedShelf = this.shelf;
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
  margin-left: 5rem;
  border-right: 2px solid rgb(117, 62, 14);
  border-top: 2px solid rgb(117, 62, 14);
  border-left: 2px solid rgb(117, 62, 14);
}

input {
  margin-top: 10px;
  width: 50px;
}

.update-input {
  margin-top: 0.5rem;
  display: inline-block;
}

.button {
  display: inline-block;
  margin-left: 1.5rem;
}

.flex-container {
  display: flex;
  align-items: center;
}
</style>
