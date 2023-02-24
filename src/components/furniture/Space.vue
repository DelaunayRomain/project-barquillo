<template>
  <div class="separation" :style="cssStyle" @click="addHardwareToSpace"></div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['mySpace', 'shelf'],
  data() {
    return {
      space: this.mySpace,
    };
  },
  computed: {
    ...mapGetters(['shelfs', 'hardware']),
    cssStyle() {
      return { width: this.space.width + '%' };
    },
    identifiedSpace() {
      const space = this.shelf.insideSpaces.spaces.find(
        (space) => space.id === this.mySpace.id
      );
      return space;
    },
  },
  methods: {
    addHardwareToSpace() {
      this.resetHardwareInSpace();
      this.pushHardware();
      this.updateSpaceInStore();
      console.log(this.identifiedSpace);
    },
    resetHardwareInSpace() {
      if (this.space.hardware) {
        this.space.hardware = '';
      }
    },
    pushHardware() {
      if (this.hardware.door === true) {
        this.space.hardware = 'door';
      } else if (this.hardware.foldingDoor === true) {
        this.space.hardware = 'foldingDoor';
      } else if (this.hardware.drawer === true) {
        this.space.hardware = 'drawer';
      }
    },
    updateSpaceInStore() {
      this.identifiedSpace = this.space;
    },
  },
};
</script>

<style scoped>
.separation {
  display: inline-block;
  height: 100%;
  border-right: 2px solid rgb(117, 62, 14);
}
</style>
