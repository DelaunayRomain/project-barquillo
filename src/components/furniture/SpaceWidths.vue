<template>
  <div>
    <div class="container" :style="cssStyleContainer">
      <div
        v-if="qttySeparations === '1'"
        class="separation"
        :style="{
          width: insideWidth + '%',
        }"
      ></div>
      <div
        v-if="qttySeparations === '2'"
        class="separation"
        :style="{
          width: insideWidth + '%',
        }"
      ></div>
      <div
        v-if="qttySeparations === '2'"
        class="separation"
        :style="{
          width: insideWidth + '%',
        }"
      ></div>
      <div
        class="separation separation-3"
        :style="{
          width: insideWidth + '%',
        }"
        v-if="qttySeparations === '3'"
      ></div>
      <div
        class="separation separation-3"
        :style="{
          width: insideWidth + '%',
        }"
        v-if="qttySeparations === '3'"
      ></div>
      <div
        class="separation separation-3"
        :style="{
          width: insideWidth + '%',
        }"
        v-if="qttySeparations === '3'"
      ></div>
    </div>
    <div class="inputs">
      <div class="inputs input">
        <p v-if="space.id === 0">Separaciones?</p>
        <select
          name="qttySeparations"
          id="qttySeparations"
          v-model="qttySeparations"
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="inputs input">
        <p v-if="space.id === 0">Que estilo?</p>
        <select
          name="styleSeparations"
          id="styleSeparations"
          v-model="styleSeparations"
        >
          <option value="centered">centrado</option>
          <option value="left">izquierda</option>
          <option value="right">derecha</option>
        </select>
      </div>
      <div class="confirm"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['space'],
  data() {
    return {
      qttySeparations: 0,
      styleSeparations: 'centered',
    };
  },
  computed: {
    ...mapGetters(['totalWidth', 'heights']),
    cssStyleContainer() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.space.height * 3 + 'px',
      };
    },
    spaceIndex() {
      return this.heights.findIndex((space) => space.id === this.space.id);
    },
    styleChangeWidth() {
      if (this.styleSeparations === 'centered') {
        return 0;
      } else if (this.styleSeparations === 'left') {
        return -12 / this.qttySeparations;
      } else {
        return 12 / this.qttySeparations;
      }
    },
    insideWidth() {
      if (this.qttySeparations === '1') {
        return 50 + this.styleChangeWidth;
      } else if (this.qttySeparations === '2') {
        return 33.3 + this.styleChangeWidth;
      } else if (this.qttySeparations === '3') {
        return 25 + this.styleChangeWidth;
      } else {
        return 100;
      }
    },
  },
  watch: {
    qttySeparations(qtty) {
      this.heights[this.spaceIndex].insideSpaces.qttySeparations = qtty;
      this.heights[this.spaceIndex].insideSpaces.widthInPercentaje =
        this.insideWidth;
    },
    styleSeparations(style) {
      this.heights[this.spaceIndex].insideSpaces.styleSeparations = style;
      this.heights[this.spaceIndex].insideSpaces.widthInPercentaje =
        this.insideWidth;
    },
  },
  created() {
    this.qttySeparations =
      this.heights[this.spaceIndex].insideSpaces.qttySeparations;
    this.styleSeparations =
      this.heights[this.spaceIndex].insideSpaces.styleSeparations;
  },
};
</script>

<style scoped>
.container {
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  border: 2px solid rgb(117, 62, 14);
}
.inputs {
  width: 50%;
  display: inline-block;
  vertical-align: middle;
}

.input {
  width: 50%;
}

.separation {
  display: inline-block;
  height: 100%;
  border-right: 2px solid rgb(117, 62, 14);
}
</style>
