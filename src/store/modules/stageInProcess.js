export default {
  state() {
    return {
      stages: {
        1: '/reference',
        2: '/general',
        3: '/detailed',
        4: '/hardware',
        5: '/color',
      },
      actualStage: 1,
    };
  },
  mutations: {
    next(state) {
      if (state.actualStage < 5) state.actualStage++;
    },
    previous(state) {
      if (state.actualStage > 1) state.actualStage--;
    },
  },
  getters: {
    actualStage(state) {
      return state.actualStage;
    },
    nextStage(state) {
      return state.actualStage < 5
        ? state.stages[state.actualStage + 1]
        : state.stages[state.actualStage];
    },
    previousStage(state) {
      return state.actualStage > 1
        ? state.stages[state.actualStage - 1]
        : state.stages[state.actualStage];
    },
    stages(state) {
      return state.stages;
    },
  },
  actions: {
    previous(context) {
      context.commit('previous');
    },
    next(context) {
      context.commit('next');
    },
  },
};
