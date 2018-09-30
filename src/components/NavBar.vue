<template>
  <v-carousel class="section" hide-delimiters style="margin-top: -70px">
    <v-carousel-item
      :src="require('@/assets/home/1_01.jpg')"
      transition="fade"
    >
      <v-container fill-height fluid>
        <v-layout fill-height align-center>
          <v-flex xs12 md12 lg12 text-xs-center white--text>
            <div class="display-1">资产大航海时代的领航者</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
    <v-carousel-item
      :src="require('@/assets/home/1_02.jpg')"
      transition="fade"
    >
      <v-container fill-height fluid>
        <v-layout fill-height align-center>
          <v-flex xs12 md12 lg12 text-xs-center white--text>
            <div class="title my-3">迦南资本致力于提供</div>
            <div class="title my-3">专业的全球化资产配置与物业运营服务</div>
            <div class="title my-3">深度的原汁原味的海外生活体验</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
    <v-carousel-item
      :src="require('@/assets/home/1_03.jpg')"
      transition="fade"
    >
      <v-container fill-height fluid>
        <v-layout fill-height align-center>
          <v-flex xs12 md12 lg12 text-xs-center white--text>
            <div class="display-1">挖掘洼地资产，专注财富增值</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
    <v-carousel-item
      :src="require('@/assets/home/1_04.jpg')"
      transition="fade"
    >
      <v-container fill-height fluid>
        <v-layout fill-height align-center>
          <v-flex xs12 md12 lg12 text-xs-center white--text>
            <div class="display-1">体验海外慢节奏，品味当地原生活</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

