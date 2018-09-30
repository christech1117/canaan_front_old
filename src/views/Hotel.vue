<template>
  <div id="hotel">
    <v-container class="section" grid-list-md text-xs-center>
      <v-layout class="text-xs-left" row wrap>
        <v-flex xs12 md1 mt-4>
          <v-img
            class="white--text"
            max-width="100px"
            :src="require('@/assets/hotel/s_01.png')"
          >
          </v-img>
        </v-flex>
        <v-flex xs12 md4 mt-4 mx-4>
          <div class="display-1">
            <router-link to="/hotel_detail" style="color: black">希腊</router-link>
          </div>
          <div class="subheading my-4">圣托里尼岛 - 爱琴海上的明珠，其悬崖上漫山的蓝顶白墙吸引着全世界的目光。文明于世的旅游胜地 - 因其令人惊叹的美景和壮丽的日落，称为全球最受欢迎的旅游和拍摄地。美景人文并茂 - 火山口上的城镇有着可爱的画廊，繁华的夜生活和优良的葡萄酒。</div>
          <v-img
            max-height="30"
            max-width="30"
            :src="require('@/assets/comma.png')"
          >
          </v-img>
          <div class="subheading ml-4">西方文明的发源地</div>
        </v-flex>
        <v-flex xs12 md6>
          <router-link to="/hotel_detail">
            <v-img
              max-width="600"
              :src="require('@/assets/hotel/b_01.png')"
            >
            </v-img>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="section" grid-list-md text-xs-center>
      <v-layout class="text-xs-left" row wrap>
        <v-flex xs12 md6>
          <router-link to="/hotel_detail">
            <v-img
              max-width="600"
              :src="require('@/assets/hotel/b_02.png')"
            >
            </v-img>
          </router-link>
        </v-flex>
        <v-flex xs12 md5 mt-4 mx-4>
          <div class="display-1">
            <router-link to="/hotel_detail" style="color: black">澳大利亚</router-link>
          </div>
          <div class="subheading my-4">澳大利亚（Australia），全称为澳大利亚联邦（The Commonwealth of Australia）。其领土面积7686850平方公里，四面环海，是世界上唯一国土覆盖整个大陆的国家。拥有很多独特的动植物和自然景观的澳大利亚，是一个奉行多元文化的移民国家。</div>
          <v-img
            max-height="30"
            max-width="30"
            :src="require('@/assets/comma.png')"
          >
          </v-img>
          <div class="subheading ml-4">中国资本的海外乐土</div>
        </v-flex>
      </v-layout>
    </v-container>
        <v-container class="section" grid-list-md text-xs-center>
      <v-layout class="text-xs-left" row wrap>
        <v-flex xs12 md1 mt-4>
          <v-img
            class="white--text"
            max-width="100px"
            :src="require('@/assets/hotel/s_02.png')"
          >
          </v-img>
        </v-flex>
        <v-flex xs12 md4 mt-4 mx-4>
          <div class="display-1">
            <router-link to="/hotel_detail" style="color: black">西班牙</router-link>
          </div>
          <div class="subheading my-4">马德里-欧盟GDP总量排名前三的国际性大都市西班牙主要的商业中心 - 南欧经济金融中心，西班牙多数公司总部所在顶级文化目的地 - 遍布全城的米其林餐厅和举世闻名的博物馆</div>
          <v-img
            max-height="30"
            max-width="30"
            :src="require('@/assets/comma.png')"
          >
          </v-img>
          <div class="subheading ml-4">热情洋溢的斗牛士的故乡</div>
        </v-flex>
        <v-flex xs12 md6>
          <router-link to="/hotel_detail">
            <v-img
              max-width="600"
              :src="require('@/assets/hotel/b_03.png')"
            >
            </v-img>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="section" grid-list-md text-xs-center>
      <v-layout class="text-xs-left" row wrap>
        <v-flex xs12 md6>
          <router-link to="/hotel_detail">
            <v-img
              max-width="600"
              :src="require('@/assets/hotel/b_04.png')"
            >
            </v-img>
          </router-link>
        </v-flex>
        <v-flex xs12 md5 mt-4 mx-4>
          <div class="display-1">
            <router-link to="/hotel_detail" style="color: black">葡萄牙</router-link>
          </div>
          <div class="subheading my-4">欧洲大陆最西端 - 年接待游客超过100万人次富庶的航海家故乡 - 里斯本大区人均GDP远高于欧盟平均人均GDP历久弥新的老城区 - 政府在保留原有建筑外观的同时，更新老旧设施，引入大量时尚元素，包括博物馆，画廊，艺术工作室，特色酒吧，设计服饰。使整个老城区焕发出迷人气质，正如上海之“新天地”</div>
          <v-img
            max-height="30"
            max-width="30"
            :src="require('@/assets/comma.png')"
          >
          </v-img>
          <div class="subheading ml-4">里斯本老城区，无法不留恋</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'hotel'
};
</script>
