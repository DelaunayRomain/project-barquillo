<template>
  <div class="separation" :style="cssStyle">
    <div v-if="logic === addHardware">
      <add-hardware-logic :space="mySpace" :shelf="shelf"></add-hardware-logic>
    </div>
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
        width: this.mySpace.width + '%',
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
