import Vue from 'vue';
import App from './App';
// в webpack.base.config прописано какие расширения будут автоматически подставляться
import router from './router';
//по умолчанию будет искать /router/index.js

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
