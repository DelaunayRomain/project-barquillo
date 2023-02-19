export default {
  state() {
    return {
      totalHeight: null,
      totalWidth: null,
      shelfHeights: [],
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
    shelfHeights(state) {
      return state.shelfHeights;
    },
    shelfAmount(state) {
      return state.shelfAmount;
    },
  },
  actions: {},
};
