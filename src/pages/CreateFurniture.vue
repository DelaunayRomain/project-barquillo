<template>
  <keep-alive>
    <create-furniture-form></create-furniture-form>
  </keep-alive>
  <section class="show-furniture">
    <div v-if="shelfs.length > 0">
      <p>Hace click en el espacio para cambiar su altura</p>
      <ul>
        <shelf v-for="shelf in shelfs" :key="shelf.id" :shelf="shelf"></shelf>
      </ul>
      <span
        ><router-link to="/select-furniture">etapa anterior</router-link
        ><router-link @click="unlockNextPage" to="/add-separators"
          >proxima etapa</router-link
        ></span
      >
    </div>
    <p v-else>Completa el formulario, y se dibujara tu mueble aqui!</p>
  </section>
</template>

<script>
import CreateFurnitureForm from '../components/forms/CreateFurnitureForm.vue';
import Shelf from '../components/furniture/Shelf.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    CreateFurnitureForm,
    Shelf,
  },
  computed: {
    ...mapGetters(['shelfs', 'stages']),
  },
  methods: {
    unlockNextPage() {
      this.stages.addSeparators = true;
    },
  },
};
</script>

<style scoped>
.show-furniture {
  float: right;
  width: 800px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  margin: 1rem 0;
}
</style>
