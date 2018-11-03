<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :width="200"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="{path: item.path}"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      absolute
      color="rgba(255, 255, 255, 0.0)"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques"
      flat
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>

      <v-spacer></v-spacer>

      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">
         <img src="@/assets/logo.png" style="height:40px;width:120px">
        </v-btn>
        <v-btn flat to="/about">关于</v-btn>
        <v-btn flat to="/fund">海外资产配置</v-btn>
        <v-btn flat to="/hotel">海外资产运营</v-btn>
        <v-btn flat to="/travel">海外生活体验</v-btn>
        <v-btn flat to="/contact">联系我们</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <nav-bar/>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <footer-bar/>
    <!-- <v-footer app>
      <span>2018</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'bubble_chart', title: '首页', path: '/' },
        { icon: 'bubble_chart', title: '关于', path: '/about' },
        { icon: 'bubble_chart', title: '海外资产配置', path: '/fund' },
        { icon: 'bubble_chart', title: '海外资产运营', path: '/hotel' },
        { icon: 'bubble_chart', title: '海外生活体验', path: '/travel' },
        { icon: 'bubble_chart', title: '联系我们', path: '/contact' },
      ],
      miniVariant: false,
      right: true,
      title: 'CANAAN',
    };
  },
};
</script>
