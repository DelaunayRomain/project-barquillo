export default {
  state() {
    return {
      totalHeight: null,
      totalWidth: null,
      shelfs: [],
      shelfAmount: null,
    };
  },
  mutations: {},
  getters: {
    totalHeight(state) {
      return state.totalHeight;
    },
    totalWidth(state) {
      return state.totalWidth;
    },
    shelfs(state) {
      return state.shelfs;
    },
    shelfAmount(state) {
      return state.shelfAmount;
    },
  },
  actions: {},
};
