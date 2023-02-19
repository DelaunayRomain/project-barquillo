import { createWebHistory, createRouter } from 'vue-router';

import ColorFurniture from './pages/ColorFurniture.vue';
import Separators from './pages/Separators.vue';
import Shelfs from './pages/Shelfs.vue';
import Hardware from './pages/Hardware.vue';
import Reference from './pages/Reference.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/reference', component: Reference },
    { path: '/shelfs', component: Shelfs },
    { path: '/separators', component: Separators },
    { path: '/hardware', component: Hardware },
    { path: '/color', component: ColorFurniture },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
