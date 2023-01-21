<template>
  <div>
    <div class="space-height" :style="cssStyle" @click="update = true">
      <div v-if="update">
        <input
          type="number"
          v-model="newSpaceHeight"
          :placeholder="space.height"
        /><span>cm</span>
      </div>
      <p v-else>{{ space.height }} cm</p>
    </div>
    <div class="button">
      <button v-if="update" @click="updateFurniture">OK</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['space'],
  data() {
    return {
      update: false,
      newSpaceHeight: null,
    };
  },
  computed: {
    ...mapGetters(['totalWidth', 'heights', 'totalHeight']),
    cssStyle() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.space.height * 3 + 'px',
        backgroundColor: this.update
          ? 'rgba(117, 62, 14, 0.2)'
          : this.space.confirmed
          ? 'rgba(109, 206, 128, 0.2)'
          : '',
      };
    },
  },
  methods: {
    updateHeight() {
      if (!(this.newSpaceHeight && this.newSpaceHeight > 0)) return;
      const identifiedSpace = this.heights.find(
        (space) => space.id === this.space.id
      );
      identifiedSpace.height = this.newSpaceHeight;
      identifiedSpace.confirmed = true;
    },
    updateOtherHeights() {
      const qttyUnconfirmedSpaces = this.heights.filter(
        (space) => space.confirmed === false
      ).length;
      const totalConfirmedHeight = this.heights
        .filter((space) => space.confirmed === true)
        .reduce((acc, space) => acc + space.height, 0);
      const newHeightForUnconfirmedSpaces =
        (this.totalHeight - totalConfirmedHeight) / qttyUnconfirmedSpaces;
      this.heights.forEach((space) => {
        if (space.confirmed === false)
          space.height = newHeightForUnconfirmedSpaces;
      });
    },
    updateFurniture() {
      this.updateHeight();
      this.updateOtherHeights();
      this.update = false;
    },
  },
};
</script>

<style scoped>
.space-height {
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
