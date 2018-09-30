import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import Vuetify from 'vuetify';
import '@babel/polyfill';
import './plugins/vuetify';

import enLocale from './lang/en';
import zhLocale from './lang/zh';
import './scss/index.scss'; // global css

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.use(VueI18n);

const messages = {
  // en: {
  //   ...enLocale
  // },
  // zh: {
  //   ...zhLocale
  // }
};
const i18n = new VueI18n({
  messages, // set locale messages
  locale: Cookies.get('language') || 'zh' // set locale 預設語言
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');