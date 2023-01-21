export default {
  state() {
    return {
      totalHeight: null,
      totalWidth: null,
      heights: [],
      qttyHeights: null,
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
    heights(state) {
      return state.heights;
    },
    qttyHeights(state) {
      return state.qttyHeights;
    },
  },
  actions: {},
};
