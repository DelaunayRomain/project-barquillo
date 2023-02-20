<template>
  <div>
    <div class="container" :style="cssStyleContainer">
      <div
        v-if="separators.amountOfSeparators === '1'"
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
      ></div>
      <div
        v-if="separators.amountOfSeparators === '2'"
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
      ></div>
      <div
        v-if="separators.amountOfSeparators === '2'"
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
        v-if="separators.amountOfSeparators === '3'"
      ></div>
      <div
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
        v-if="separators.amountOfSeparators === '3'"
      ></div>
      <div
        class="separator"
        :style="{
          width: separatorWidth + '%',
        }"
        v-if="separators.amountOfSeparators === '3'"
      ></div>
    </div>
    <div class="inputs">
      <div class="inputs input">
        <p v-if="shelf.id === 0">Separaciones?</p>
        <select
          name="amountOfSeparators"
          id="amountOfSeparators"
          v-model="separators.amountOfSeparators"
          @change="updateSeparators"
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
          v-model="separators.typeOfSeparators"
          @change="updateSeparators()"
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
      separators: this.shelf.insideSeparators,
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
    widthVariation() {
      if (this.separators.typeOfSeparators === 'centered') {
        return 0;
      } else if (this.separators.typeOfSeparators === 'left') {
        return -12 / this.separators.amountOfSeparators;
      } else {
        return 12 / this.separators.amountOfSeparators;
      }
    },
    separatorWidth() {
      if (this.separators.amountOfSeparators === '1') {
        return 50 + this.widthVariation;
      } else if (this.separators.amountOfSeparators === '2') {
        return 33.3 + this.widthVariation;
      } else if (this.separators.amountOfSeparators === '3') {
        return 25 + this.widthVariation;
      } else {
        return 100;
      }
    },
    identifiedSeparators() {
      const shelf = this.shelfs.find((shelf) => shelf.id === this.shelf.id);
      return shelf.insideSeparators;
    },
  },
  methods: {
    updateSeparators() {
      this.updateWidthBetweenSeparators();
      this.updateSeparatorsInStore();
    },
    updateWidthBetweenSeparators() {
      this.separators.widthOfEachSpace = [];
      this.pushSeparatorWidth();
      this.pushRemainingWidth();
    },
    pushSeparatorWidth() {
      for (let i = 0; i < this.separators.amountOfSeparators; i++) {
        this.separators.widthOfEachSpace.push(this.separatorWidth);
      }
    },
    pushRemainingWidth() {
      this.separators.widthOfEachSpace.push(
        100 -
          this.separators.widthOfEachSpace.reduce(
            (width, acc) => acc + width,
            0
          )
      );
    },
    updateSeparatorsInStore() {
      this.identifiedSeparators = this.separators;
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

.separator {
  display: inline-block;
  height: 100%;
  border-right: 2px solid rgb(117, 62, 14);
}
</style>
