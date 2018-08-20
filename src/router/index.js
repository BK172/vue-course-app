import Vue from 'vue';
import Router from 'vue-router';
// в webpack base config в resolve -> alias прописан корень для @

Vue.use(Router);

// по умолчанию роутер в режиме hash - #
export default new Router({
	// для современных браузеров с поддержкой history api
	// можно включить режим без #
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/users',
      component: () => import('@/components/UserPage')
    }
  ]
});
