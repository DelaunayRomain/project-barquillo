<template>
  <header>
    <nav>
      <h1><router-link to="/">Dibuja tu mueble!</router-link></h1>
      <router-link to="/reference" :class="{ disabled: !stages.reference }">
        1
      </router-link>
      <p>-></p>
      <router-link to="/general" :class="{ disabled: !stages.general }">
        2
      </router-link>
      <p>-></p>
      <router-link to="/detailed" :class="{ disabled: !stages.detailed }">
        3
      </router-link>
      <p>-></p>
      <router-link to="/hardware" :class="{ disabled: !stages.hardware }">
        4
      </router-link>
      <p>-></p>
      <router-link to="/color" :class="{ disabled: !stages.color }">
        5
      </router-link>
      <button>ayuda</button>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['stages']),
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
  color: white;
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

.disabled {
  opacity: 0.2;
  pointer-events: none;
}
</style>
