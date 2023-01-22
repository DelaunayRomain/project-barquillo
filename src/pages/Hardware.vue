<template>
  <section class="show-furniture">
    <p>Hace click en el espacio para agregar las quincaillerias</p>
    <ul>
      <keep-alive
        ><div v-for="space in heights" :key="space.id" :space="space">
          <add-hardware
            v-for="insideWidth in space.displayInsideSpaces"
            :key="
              space.displayInsideSpaces.findIndex(
                (inside) => inside === insideWidth
              )
            "
            :insideWidth="insideWidth"
          ></add-hardware></div
      ></keep-alive>
    </ul>
    <span><router-link to="/color">proxima etapa</router-link></span>
  </section>
</template>

<script>
import AddHardware from '../components/furniture/AddHardware.vue';
import { mapGetters } from 'vuex';
export default {
  components: { AddHardware },
  computed: {
    ...mapGetters(['heights']),
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
