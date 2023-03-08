<template>
  <div class="separation" :style="cssStyle">
    <div v-if="logic === addHardware">
      <add-hardware-logic
        :mySpace="mySpace"
        :shelf="shelf"
      ></add-hardware-logic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddHardwareLogic from '../logic/AddHardwareLogic.vue';
export default {
  components: { AddHardwareLogic },
  props: ['mySpace', 'shelf', 'logic', 'totalWidth'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['shelfs', 'hardware']),
    cssStyle() {
      return {
        width: this.widthOfSpace,
        height: this.shelf.height * 3 + 'px',
      };
    },
    widthOfSpace() {
      return (this.totalWidth * this.mySpace.width * 3) / 100 + 'px';
    },
  },
  methods: {},
};
</script>

<style scoped>
.separation {
  display: inline-block;
  height: 100%;
  border-right: 2px solid rgb(117, 62, 14);
}
</style>
