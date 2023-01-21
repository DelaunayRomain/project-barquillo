import { createStore } from 'vuex';

import furnitureModule from './modules/furniture.js';
import StageInProcessModule from './modules/stageInProcess.js';

const store = createStore({
  modules: {
    furniture: furnitureModule,
    stageInProcess: StageInProcessModule,
  },
});

export default store;
