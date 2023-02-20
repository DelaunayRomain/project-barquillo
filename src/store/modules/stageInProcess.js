export default {
  state() {
    return {
      stages: {
        reference: false,
        createFurniture: false,
        addSeparators: false,
        addHardware: false,
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
