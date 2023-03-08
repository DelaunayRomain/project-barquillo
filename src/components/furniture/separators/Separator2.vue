<template>
  <div
    class="separator"
    :style="{
      width: spaceWidth + '%',
    }"
  ></div>
  <div
    class="separator"
    :style="{
      width: spaceWidth + '%',
    }"
  ></div>
</template>

<script>
export default {
  props: ['spaceWidth'],
};
</script>

<style scoped>
.separator {
  display: inline-block;
  height: 100%;
  border-right: 2px solid rgb(117, 62, 14);
}
</style>
