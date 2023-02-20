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
          <hardware
            v-for="spaceWidth in shelf.insideSeparators.widthOfEachSpace"
            :key="
              shelf.insideSeparators.widthOfEachSpace.findIndex(
                (width) => width === spaceWidth
              )
            "
            :spaceWidth="spaceWidth"
          ></hardware></div
      ></keep-alive>
    </ul>
    <span
      ><router-link to="/add-separators">etapa anterior</router-link
      ><router-link to="/color" @click="stages.color = true"
        >proxima etapa</router-link
      ></span
    >
  </section>
</template>

<script>
import Hardware from '../components/furniture/Hardware.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Hardware },
  computed: {
    ...mapGetters(['shelfs', 'totalWidth', 'stages']),
  },
  created() {
    console.log(this.shelfs);
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
