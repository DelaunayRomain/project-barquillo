<template>
  <div>
    <div class="container" :style="cssStyleContainer">
      <div
        v-if="separations === 1"
        class="separation"
        :style="cssStyle1Separation"
      ></div>
      <div v-elseif="separations === 2">
        <div class="separation separation-2"></div>
        <div class="separation separation-2"></div>
      </div>
      <div v-elseif="separations === 3">
        <div class="separation separation-3"></div>
        <div class="separation separation-3"></div>
        <div class="separation separation-3"></div>
      </div>
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
          name="style"
          id="style"
          v-model="styleSeparations"
          placeholder="centrado"
        >
          <option value="centered">centrado</option>
          <option value="left">izquierda</option>
          <option value="right">derecha</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['space'],
  data() {
    return {
      width: [50, 33.3, 25],
      qttySeparations: 0,
      styleSeperations: 'centered',
    };
  },
  computed: {
    ...mapGetters(['totalWidth']),
    separations() {
      return this.qttySeparations;
    },
    cssStyleContainer() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.space.height * 3 + 'px',
      };
    },
    cssStyle1Separation() {
      return {
        width: '50px',
      };
    },
  },
};
</script>

<style scoped>
.container {
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
