<template>
  <div class="separation" :style="cssStyle"></div>
</template>

<script>
export default {
  props: ['spaceWidth'],
  computed: {
    cssStyle() {
      return { width: this.spaceWidth + '%' };
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
