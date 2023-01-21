<template>
  <header>
    <nav>
      <h1><router-link to="/">Dibuja tu mueble!</router-link></h1>
      <div class="navigation" v-if="$route.path !== '/'">
        <router-link @click="previous" :to="previousStage"
          >anterior</router-link
        >
        <h1>{{ actualStage }}/5</h1>
        <router-link @click="next" :to="nextStage">siguiente</router-link>
      </div>
      <button>ayuda</button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    previous() {
      this.$store.dispatch('previous');
    },
    next() {
      this.$store.dispatch('next');
    },
  },
  computed: {
    actualStage() {
      return this.$store.getters.actualStage;
    },
    stage() {
      return this.$store.getters.stages;
    },
    nextStage() {
      return this.$store.getters.nextStage;
    },
    previousStage() {
      return this.$store.getters.previousStage;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.navigation {
  display: flex;
}
</style>
