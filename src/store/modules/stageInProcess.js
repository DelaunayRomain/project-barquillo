export default {
  state() {
    return {
      stages: {
        reference: false,
        shelfs: false,
        separators: false,
        hardware: false,
        color: false,
      },
    };
  },
  getters: {
    stages(state) {
      return state.stages;
    },
  },
};
