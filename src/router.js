import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Fund from './views/Fund.vue';
import Hotel from './views/Hotel.vue';
import HotelDetail from './views/HotelDetail.vue';
import Travel from './views/Travel.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/fund',
    name: 'fund',
    component: Fund,
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: Hotel,
  },
  {
    path: '/hotel_detail',
    name: 'hotelDetail',
    component: HotelDetail,
  },
  {
    path: '/travel',
    name: 'travel',
    component: Travel,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  ],
});
