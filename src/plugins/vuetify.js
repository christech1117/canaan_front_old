import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import zhHant from 'vuetify/es5/locale/zh-Hant';

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: {
      zhHant,
    },
    current: 'zh-Hant',
  },
});
