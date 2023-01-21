<template>
  <section class="input-furniture">
    <form @submit.prevent="generateFurniture">
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
        <input type="number" v-model="furniture.qttyOfSpaces" />
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
        totalHeight: null,
        totalWidth: null,
        qttyOfSpaces: null,
        spacesHorizontal: [],
      },
    };
  },
  methods: {
    getSpaceHeight() {
      return this.furniture.totalHeight / this.furniture.qttyOfSpaces;
    },
    generateFurniture() {
      this.furniture.spacesHorizontal = [];
      for (let i = 0; i < this.furniture.qttyOfSpaces; i++) {
        this.furniture.spacesHorizontal.push({
          id: i,
          height: this.getSpaceHeight(),
          confirmed: false,
          insideSpaces: [1],
        });
      }
      this.$emit('generate-furniture', this.furniture);
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
.input-furniture {
  float: right;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  margin: 1rem 0;
}
</style>
