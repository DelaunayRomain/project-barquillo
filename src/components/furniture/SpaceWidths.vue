<template>
  <div>
    <div class="container" :style="cssStyleContainer">
      <div
        v-if="separations === '1'"
        class="separation"
        :style="{
          width: insideWidth + '%',
        }"
      ></div>
      <div
        v-if="separations === '2'"
        class="separation"
        :style="{
          width: insideWidth + '%',
        }"
      ></div>
      <div
        v-if="separations === '2'"
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
        v-if="separations === '3'"
      ></div>
      <div
        class="separation separation-3"
        :style="{
          width: insideWidth + '%',
        }"
        v-if="separations === '3'"
      ></div>
      <div
        class="separation separation-3"
        :style="{
          width: insideWidth + '%',
        }"
        v-if="separations === '3'"
      ></div>
    </div>
    <div class="inputs">
      <div class="inputs input">
        <p v-if="space.id === 0">Separaciones?</p>
        <select
          name="qttySeparations"
          id="qttySeparations"
          v-model="qttySeparations"
          placeholder="0"
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
          placeholder="centrado"
        >
          <option value="centered">centrado</option>
          <option value="left">izquierda</option>
          <option value="right">derecha</option>
        </select>
      </div>
      <button v-if="space.id == heights.length - 1" @click="confirmSeparations">
        Confirmar separaciones
      </button>
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
    separations() {
      return this.qttySeparations;
    },
    cssStyleContainer() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.space.height * 3 + 'px',
      };
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
  methods: {
    confirmSeparations() {
      const separations = [];
      for (let i = 0; i < this.qttySeparations; i++) {
        separations.push(this.insideWidth);
      }
      separations.push(
        this.totalWidth - separations.reduce((acc, sep) => acc + sep, 0)
      );
    },
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
