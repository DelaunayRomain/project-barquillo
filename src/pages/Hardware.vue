<template>
  <section class="show-furniture">
    <p>Hace click en el espacio para agregar las quincaillerias</p>
    <ul>
      <keep-alive
        ><div
          class="container"
          :style="{
            width: totalWidth * 3 + 'px',
            height: space.height * 3 + 'px',
          }"
          v-for="space in heights"
          :key="space.id"
          :space="space"
        >
          <add-hardware
            v-for="displayWidth in space.displayInsideSpaces"
            :key="
              space.displayInsideSpaces.findIndex(
                (inside) => inside === displayWidth
              )
            "
            :displayWidth="displayWidth"
          ></add-hardware></div
      ></keep-alive>
    </ul>
    <span
      ><router-link to="/detailed">etapa anterior</router-link
      ><router-link to="/color" @click="stages.color = true"
        >proxima etapa</router-link
      ></span
    >
  </section>
</template>

<script>
import AddHardware from '../components/furniture/AddHardware.vue';
import { mapGetters } from 'vuex';
export default {
  components: { AddHardware },
  computed: {
    ...mapGetters(['heights', 'totalWidth', 'stages']),
  },
  created() {
    console.log(this.heights);
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

.container {
  text-align: left;

  vertical-align: middle;
  border: 2px solid rgb(117, 62, 14);
}
</style>
