<template>
    <section class="general-form">
      <h2>Separadores</h2>
      <div v-if="identifiedShelf">
        <form @submit.prevent="updateSeparators">
          <div class="furniture-input">
            <label>Cuantos Separadores ?</label>
            <select
              name="amountOfSeparators"
              id="amountOfSeparators"
              v-model="amountOfSeparators"
              @change="showSeparators('amountOfSeparators')"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="furniture-input">
            <label>Que orientacion ?</label>
            <select
              name="typeOfSeparators"
              id="typeOfSeparators"
              v-model="typeOfSeparators"
              @change="showSeparators('typeOfSeparators')"
            >
              <option value="centered">centrado</option>
              <option value="left">izquierda</option>
              <option value="right">derecha</option>
            </select>
          </div>
          <button>Confirmar</button>
        </form>
      </div>
      <div v-else>
        <h2>Haz click en el espacio para agregar separadores</h2>
      </div>
    </section>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  export default {
    props: ['updating-shelf'],
    data() {
      return {
        amountOfSeparators: 0,
        typeOfSeparators: 'centered',
        spaces: [],
      };
    },
    computed: {
      ...mapGetters(['shelfs']),
      identifiedShelf() {
        return this.shelfs.find((shelf) => shelf === this.updatingShelf);
      },
  
      widthVariationRelatedToTypeOfSeparator() {
        const objectTypeSeparators = {
          centered: 0,
          left: -12 / this.amountOfSeparators,
          right: 12 / this.amountOfSeparators,
        };
        return objectTypeSeparators[this.typeOfSeparators];
      },
      spaceWidth() {
        const objectSpaceWidth = {
          0: 100,
          1: 50 + this.widthVariationRelatedToTypeOfSeparator,
          2: 33.3 + this.widthVariationRelatedToTypeOfSeparator,
          3: 25 + this.widthVariationRelatedToTypeOfSeparator,
        };
        return objectSpaceWidth[String(this.amountOfSeparators)];
      },
  
      remainingWidth() {
        return 100 - this.amountOfSeparators * this.spaceWidth;
      },
    },
    methods: {
      showSeparators(change) {
        this.identifiedShelf.insideSpaces[change] = this[change];
      },
      updateSeparators() {
        this.updateSpaces();
        this.identifiedShelf.amountOfSeparators = this.amountOfSeparators;
        this.identifiedShelf.typeOfSeparators = this.typeOfSeparators;
        this.resetData();
      },
      updateSpaces() {
        this.spaces = [];
        this.pushSeparatorWidth();
        this.pushRemainingWidth();
        this.updateSpacesInStore();
      },
      pushSeparatorWidth() {
        for (let id = 0; id < this.amountOfSeparators; id++) {
          this.spaces.push({ id: id, width: this.spaceWidth });
        }
      },
      pushRemainingWidth() {
        this.spaces.push({
          id: this.spaces.length,
          width: this.remainingWidth,
        });
      },
      updateSpacesInStore() {
        this.identifiedShelf.insideSpaces.spaces = this.spaces;
      },
      resetData() {
        this.identifiedShelf.insideSpaces.isUpdating = false;
        this.amountOfSeparators = 0;
        this.typeOfSeparators = 'centered';
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 3rem;
  }
  input {
    font: inherit;
    padding: 0.15rem;
  }
  label {
    display: inline-block;
    text-align: center;
  }
  button {
    margin-top: 2rem;
    font-size: 1.3rem;
  }
  .general-form {
    float: left;
    width: 28vw;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    margin-right: 1.5rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    height: 70vh;
    background-color: white;
  }
  
  .furniture-input {
    margin-bottom: 2rem;
  }
  </style>