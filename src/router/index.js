import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/Index.vue';
import UserEdit from '@/pages/UserEdit.vue';
import UserAdd from '@/pages/UserAdd.vue';
import Table from '@/pages/Table.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Index },
    { path: '/list', component: Table },
    { path: '/user/add', component: UserAdd },
    // props true, чтобы при открытии страницы входными параметрами пришел id
    { path: '/user/:id', component: UserEdit, props: true },
  ],
});
