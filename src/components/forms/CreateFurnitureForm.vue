<template>
  <section class="general-form">
    <form @submit.prevent="createFurniture">
      <div>
        <label>Altura en cm?</label>
        <input type="number" v-model="furniture.totalHeight" />
      </div>
      <div>
        <label>Ancho en cm?</label>
        <input type="number" v-model="furniture.totalWidth" />
      </div>
      <div>
        <label>Cuantos espacios horizontales ?</label>
        <input type="number" v-model="furniture.shelfsAmount" />
      </div>
      <button>Ver mueble!</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      furniture: {
        shelfs: [],
        totalHeight: 0,
        totalWidth: 0,
        shelfsAmount: 0,
      },
    };
  },
  computed: {
    shelfHeight() {
      return this.furniture.totalHeight / this.furniture.shelfsAmount;
    },
  },
  methods: {
    createFurniture() {
      this.createShelfs();
      this.$store.state.furniture = this.furniture;
    },
    createShelfs() {
      this.furniture.shelfs = [];
      for (let id = 0; id < this.furniture.shelfsAmount; id++) {
        this.furniture.shelfs.push(this.pushShelf(id));
      }
    },
    pushShelf(id) {
      return {
        id: id,
        height: this.shelfHeight,
        confirmed: false,
        insideSeparators: {
          amountOfSeparators: 0,
          typeOfSeparators: 'centered',
          widthOfEachSpace: [],
        },
      };
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
