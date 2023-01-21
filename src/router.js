import { createWebHistory, createRouter } from 'vue-router';

import ColorFurniture from './pages/ColorFurniture.vue';
import DetailedFurniture from './pages/DetailedFurniture.vue';
import GeneralFurniture from './pages/GeneralFurniture.vue';
import Hardware from './pages/Hardware.vue';
import Reference from './pages/Reference.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/reference', component: Reference },
    { path: '/general', component: GeneralFurniture },
    { path: '/detailed', component: DetailedFurniture },
    { path: '/hardware', component: Hardware },
    { path: '/color', component: ColorFurniture },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
