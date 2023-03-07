<template>
  <div class="separation" :style="cssStyle">
    <add-hardware-logic
      v-if="logic === addHardware"
      :space="mySpace"
      :shelf="shelf"
    ></add-hardware-logic>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddHardwareLogic from '../logic/AddHardwareLogic.vue';
export default {
  components: { AddHardwareLogic },
  props: ['mySpace', 'shelf', 'logic'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['shelfs', 'hardware']),
    cssStyle() {
      return {
        width: this.space.width + '%',
      };
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
