<template>
  <div
    v-if="space.hardware === 'door'"
    class="handle"
    :style="cssStyleDoor"
  ></div>
  <div
    v-if="space.hardware === 'foldingDoor'"
    class="handle"
    :style="cssStyleFoldingDoor"
  ></div>
  <div
    v-if="space.hardware === 'drawer'"
    class="handle"
    :style="cssStyleDrawer"
  ></div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['space', 'shelf'],
  data() {
    return {
      door: {
        side: '',
        height: '',
      },
    };
  },
  computed: {
    ...mapGetters(['shelfs']),
    hardware() {
      return this.space.hardware;
    },
    cssStyleDrawer() {
      return {
        float: 'left',
        marginLeft: '50%',
        marginTop: '5%',
        transform: 'translateX(-50%)',
      };
    },
    cssStyleFoldingDoor() {
      return {
        float: 'bottom',
        marginLeft: '50%',
        marginTop: this.shelf.height * 3 * 0.8 + 'px',
        transform: 'translateX(-50%)',
      };
    },
    cssStyleDoor() {
      this.getSideOfTheDoor();
      this.getHeightOfTheDoor();
      console.log(this.door.side);
      console.log(this.door.height);
      if (this.door.side === 'left' && this.door.height === 'high') {
        return {
          float: 'right',
          marginRight: '5%',
          marginTop: this.shelf.height * 3 * 0.8 + 'px',
        };
      } else if (this.door.side === 'left' && this.door.height === 'low') {
        return {
          float: 'right',
          marginRight: '5%',
          marginTop: '5%',
        };
      } else if (this.door.side === 'right' && this.door.height === 'high') {
        return {
          float: 'left',
          marginLeft: '5%',
          marginTop: this.shelf.height * 3 * 0.8 + 'px',
        };
      } else {
        return {
          float: 'left',
          marginLeft: '5%',
          marginTop: '5%',
        };
      }
    },
  },
  methods: {
    getSideOfTheDoor() {
      this.shelf.insideSpaces.spaces.length - 1 === this.space.id
        ? (this.door.side = 'right')
        : (this.door.side = 'left');
    },
    getHeightOfTheDoor() {
      const indexOfFirstShelf = this.shelfs.length - 1;
      const indexOfActualShelf = this.shelf.id;
      let height = 0;
      for (let i = indexOfFirstShelf; i > indexOfActualShelf; i--) {
        height += this.shelfs[i].height;
      }
      height > 150 ? (this.door.height = 'high') : (this.door.height = 'low');
    },
  },
};
</script>

<style scoped>
.handle {
  height: 12px;
  width: 12px;
  border: solid;
  background-color: white;
  border-radius: 50%;
}
</style>
