<template>
  <section class="show-furniture">
    <div v-if="shelfHeights.length > 0">
      <p>Hace click en el espacio para cambiar su altura</p>
      <ul>
        <shelf-heights
          v-for="shelf in shelfHeights"
          :key="shelf.id"
          :shelf="shelf"
        ></shelf-heights>
      </ul>
      <span
        ><router-link to="/reference">etapa anterior</router-link
        ><router-link @click="stages.separators = true" to="/separators"
          >proxima etapa</router-link
        ></span
      >
    </div>
    <p v-else>Completa el formulario, y se dibujara tu mueble aqui!</p>
  </section>
  <keep-alive>
    <general-form></general-form>
  </keep-alive>
</template>

<script>
import GeneralForm from '../components/forms/GeneralForm.vue';
import ShelfHeights from '../components/furniture/ShelfHeights.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    GeneralForm,
    ShelfHeights,
  },
  computed: {
    ...mapGetters(['shelfHeights', 'stages']),
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
