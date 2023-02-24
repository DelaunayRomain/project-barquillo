<template>
  <section class="show-furniture">
    <p>Hace click en el espacio para agregar las quincaillerias</p>
    <ul>
      <keep-alive
        ><div
          class="container"
          :style="{
            width: totalWidth * 3 + 'px',
            height: shelf.height * 3 + 'px',
          }"
          v-for="shelf in shelfs"
          :key="shelf.id"
          :shelf="shelf"
        >
          <space
            v-for="space in shelf.insideSpaces.spaces"
            :key="space.id"
            :mySpace="space"
            :shelf="shelf"
          ></space></div
      ></keep-alive>
    </ul>
    <span
      ><router-link to="/add-separators">etapa anterior</router-link
      ><router-link to="/color" @click="stages.color = true"
        >proxima etapa</router-link
      ></span
    >
  </section>
  <add-hardware-form></add-hardware-form>
</template>

<script>
import Space from '../components/furniture/Space.vue';
import AddHardwareForm from '../components/forms/AddHardwareForm.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Space, AddHardwareForm },
  computed: {
    ...mapGetters(['shelfs', 'totalWidth', 'stages']),
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
