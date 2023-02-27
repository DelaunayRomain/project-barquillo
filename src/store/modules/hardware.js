export default {
  state() {
    return {
      hardware: {
        door: false,
        foldingDoor: false,
        drawer: false,
      },
    };
  },
  mutations: {},
  getters: {
    hardware(state) {
      return state.hardware;
    },
  },
  actions: {},
};
