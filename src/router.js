import { createWebHistory, createRouter } from 'vue-router';

import ColorFurniture from './pages/ColorFurniture.vue';
import AddSeparators from './pages/AddSeparators.vue';
import CreateFurniture from './pages/CreateFurniture.vue';
import AddHardware from './pages/AddHardware.vue';
import SelectFurniture from './pages/SelectFurniture.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/select-furniture', component: SelectFurniture },
    { path: '/create-furniture', component: CreateFurniture },
    { path: '/add-separators', component: AddSeparators },
    { path: '/add-hardware', component: AddHardware },
    { path: '/color', component: ColorFurniture },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
