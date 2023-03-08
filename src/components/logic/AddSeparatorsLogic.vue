<template></template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['mySpace', 'shelf'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['shelfs', 'hardware']),
  },
  methods: {},
};
</script>

<style scoped></style>
