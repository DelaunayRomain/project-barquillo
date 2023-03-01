<template>
  <section class="general-form">
    <h1>Elige lo que quieres agregar a tu librero...</h1>
    <div
      class="hardware hardware--door"
      @click="unlockHardware('door')"
      :style="hardware.door === true ? styleIfUnlocked : ''"
    >
      Puerta
    </div>
    <div
      class="hardware hardware--folding-door"
      @click="unlockHardware('foldingDoor')"
      :style="hardware.foldingDoor === true ? styleIfUnlocked : ''"
    >
      Puerta abatible
    </div>
    <div
      class="hardware hardware--drawer"
      @click="unlockHardware('drawer')"
      :style="hardware.drawer === true ? styleIfUnlocked : ''"
    >
      Cajon
    </div>
    <div class="hardware" @click="resetFurnitureHardware">Reset</div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['hardware', 'shelfs']),
    styleIfUnlocked() {
      return {
        transform: 'scale(1.5)',
      };
    },
  },
  methods: {
    unlockHardware(typeOfHardware) {
      this.resetHardware();
      this.hardware[typeOfHardware] = true;
    },
    resetHardware() {
      this.hardware.door = false;
      this.hardware.foldingDoor = false;
      this.hardware.drawer = false;
    },
    resetFurnitureHardware() {
      this.resetHardware();
      this.shelfs.forEach(function (shelf) {
        shelf.insideSpaces.spaces.forEach((space) => (space.hardware = ''));
      });
    },
  },
};
</script>

<style scoped>
.hardware {
  text-align: center;
  margin: 3rem;
  padding: 1rem;
  transition: 0.2s;
  cursor: pointer;
  border: solid;
  font-size: 1.2rem;
}
.hardware--door {
  background-color: rgb(255, 127, 80);
}
.hardware--folding-door {
  background-color: rgb(189, 183, 107);
}
.hardware--drawer {
  background-color: rgb(0, 139, 139);
}
.general-form {
  float: left;
  width: 28vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  margin-right: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  min-height: 70vh;
  background-color: white;
}
</style>
