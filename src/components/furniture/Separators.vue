<template>
  <div>
    <div class="container" :style="cssStyleContainer">
      <div
        v-if="insideSpaces.amountOfSeparators === '1'"
        class="separator"
        :style="{
          width: spaceWidth + '%',
        }"
      ></div>
      <div
        v-if="insideSpaces.amountOfSeparators === '2'"
        class="separator"
        :style="{
          width: spaceWidth + '%',
        }"
      ></div>
      <div
        v-if="insideSpaces.amountOfSeparators === '2'"
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
        v-if="insideSpaces.amountOfSeparators === '3'"
      ></div>
      <div
        class="separator"
        :style="{
          width: spaceWidth + '%',
        }"
        v-if="insideSpaces.amountOfSeparators === '3'"
      ></div>
      <div
        class="separator"
        :style="{
          width: spaceWidth + '%',
        }"
        v-if="insideSpaces.amountOfSeparators === '3'"
      ></div>
    </div>
    <div class="inputs">
      <div class="inputs input">
        <p v-if="shelf.id === 0">Separaciones?</p>
        <select
          name="amountOfSeparators"
          id="amountOfSeparators"
          v-model="insideSpaces.amountOfSeparators"
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
          v-model="insideSpaces.typeOfSeparators"
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
      insideSpaces: this.shelf.insideSpaces,
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
    widthVariationRelatedToTypeOfSeparator() {
      if (this.insideSpaces.typeOfSeparators === 'centered') {
        return 0;
      } else if (this.insideSpaces.typeOfSeparators === 'left') {
        return -12 / this.insideSpaces.amountOfSeparators;
      } else {
        return 12 / this.insideSpaces.amountOfSeparators;
      }
    },
    spaceWidth() {
      if (this.insideSpaces.amountOfSeparators === '1') {
        return 50 + this.widthVariationRelatedToTypeOfSeparator;
      } else if (this.insideSpaces.amountOfSeparators === '2') {
        return 33.3 + this.widthVariationRelatedToTypeOfSeparator;
      } else if (this.insideSpaces.amountOfSeparators === '3') {
        return 25 + this.widthVariationRelatedToTypeOfSeparator;
      } else {
        return 100;
      }
    },
    identifiedSeparators() {
      const shelf = this.shelfs.find((shelf) => shelf.id === this.shelf.id);
      return shelf.insideSpaces;
    },
    remainingWidth() {
      return 100 - this.insideSpaces.amountOfSeparators * this.spaceWidth;
    },
  },
  methods: {
    updateSeparators() {
      this.updateWidthBetweenSeparators();
      this.updateSeparatorsInStore();
    },
    updateWidthBetweenSeparators() {
      this.insideSpaces.spaces = [];
      this.pushSeparatorWidth();
      this.pushRemainingWidth();
    },
    pushSeparatorWidth() {
      for (let id = 0; id < this.insideSpaces.amountOfSeparators; id++) {
        this.insideSpaces.spaces.push({ id: id, width: this.spaceWidth });
      }
    },
    pushRemainingWidth() {
      this.insideSpaces.spaces.push({
        id: this.insideSpaces.spaces.length,
        width: this.remainingWidth,
      });
    },
    updateSeparatorsInStore() {
      this.identifiedSeparators = this.insideSpaces;
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
