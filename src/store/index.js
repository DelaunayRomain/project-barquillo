import { createStore } from 'vuex';

import furnitureModule from './modules/furniture.js';
import hardwareModule from './modules/hardware.js';
import StageInProcessModule from './modules/stageInProcess.js';

const store = createStore({
  modules: {
    furniture: furnitureModule,
    stageInProcess: StageInProcessModule,
    hardware: hardwareModule,
  },
});

export default store;
