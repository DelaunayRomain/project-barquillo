<template>
  <div>
    <div class="container" :style="cssStyleContainer">
      <div
        v-if="amountOfSeparators === '1'"
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
      ></div>
      <div
        v-if="amountOfSeparators === '2'"
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
      ></div>
      <div
        v-if="amountOfSeparators === '2'"
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
      ></div>
      <div
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
        v-if="amountOfSeparators === '3'"
      ></div>
      <div
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
        v-if="amountOfSeparators === '3'"
      ></div>
      <div
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
        v-if="amountOfSeparators === '3'"
      ></div>
    </div>
    <div class="inputs">
      <div class="inputs input">
        <p v-if="shelf.id === 0">Separaciones?</p>
        <select
          name="amountOfSeparators"
          id="amountOfSeparators"
          v-model="amountOfSeparators"
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="inputs input">
        <p v-if="shelf.id === 0">Que estilo?</p>
        <select
          name="typeOfSeparators"
          id="typeOfSeparators"
          v-model="typeOfSeparators"
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
  props: ['shelf'],
  data() {
    return {
      amountOfSeparators: 0,
      typeOfSeparators: 'centered',
    };
  },
  computed: {
    ...mapGetters(['totalWidth', 'shelfs']),
    cssStyleContainer() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.shelf.height * 3 + 'px',
      };
    },
    shelfIndex() {
      return this.shelfs.findIndex((shelf) => shelf.id === this.shelf.id);
    },
    shelfSeparators() {
      return this.shelfs[this.shelfIndex].insideSeparators;
    },
    widthVariation() {
      if (this.typeOfSeparators === 'centered') {
        return 0;
      } else if (this.typeOfSeparators === 'left') {
        return -12 / this.amountOfSeparators;
      } else {
        return 12 / this.amountOfSeparators;
      }
    },
    separatorWidth() {
      if (this.amountOfSeparators === '1') {
        return 50 + this.widthVariation;
      } else if (this.amountOfSeparators === '2') {
        return 33.3 + this.widthVariation;
      } else if (this.amountOfSeparators === '3') {
        return 25 + this.widthVariation;
      } else {
        return 100;
      }
    },
  },
  watch: {
    amountOfSeparators(amount) {
      this.shelfSeparators.amountOfSeparators = amount;
      this.shelfSeparators.widthInPercentaje = this.separatorWidth;
    },
    typeOfSeparators(type) {
      this.shelfSeparators.typeOfSeparators = type;
      this.shelfSeparators.widthInPercentaje = this.separatorWidth;
    },
  },
  created() {
    this.amountOfSeparators = this.shelfSeparators.amountOfSeparators;
    this.typeOfSeparators = this.shelfSeparators.typeOfSeparators;
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

.separator {
  display: inline-block;
  height: 100%;
  border-right: 2px solid rgb(117, 62, 14);
}
</style>
