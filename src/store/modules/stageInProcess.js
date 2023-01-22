export default {
  state() {
    return {
      stages: {
        reference: false,
        general: false,
        detailed: false,
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
