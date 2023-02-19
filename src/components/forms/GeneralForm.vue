<template>
  <section class="general-form">
    <form @submit.prevent="generateFurniture">
      <div>
        <label>Altura en cm?</label>
        <input type="number" v-model="$store.state.furniture.totalHeight" />
      </div>
      <div>
        <label>Ancho en cm?</label>
        <input type="number" v-model="$store.state.furniture.totalWidth" />
      </div>
      <div>
        <label>Cuantos espacios horizontales ?</label>
        <input type="number" v-model="$store.state.furniture.shelfAmount" />
      </div>
      <button>Ver mueble!</button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['totalHeight', 'shelfAmount']),
  },
  methods: {
    getSpaceHeight() {
      return this.totalHeight / this.shelfAmount;
    },
    generateFurniture() {
      this.$store.state.furniture.shelfHeights = [];
      for (let i = 0; i < this.shelfAmount; i++) {
        this.$store.state.furniture.shelfHeights.push({
          id: i,
          height: this.getSpaceHeight(),
          confirmed: false,
          insideSeparators: {
            amountOfSeparators: 0,
            typeOfSeparators: 'centered',
            widthInPercentaje: null,
          },
          widthOfEachSeparator: [],
        });
      }
    },
  },
};
</script>

<style scoped>
input {
  font: inherit;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
.general-form {
  float: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  margin: 1rem 0;
}
</style>
