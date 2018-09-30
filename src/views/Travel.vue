<template>
  <div id="travel">
    <v-container grid-list-md text-xs-center class="section">
      <v-layout class="section text-xs-left" row wrap>
        <v-flex xs12 md4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey lighten-4"
              max-height="400"
              flat
            >
              <v-card-text text-xs-right style="background-color: white">
                <span class="display-1">旅</span>
                <span class="headline font-weight-bold">行，为生活充个电</span>
              </v-card-text>
              <v-img
                class="white--text"
                height="395"
                :src="require('@/assets/travel/b_01.png')"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-container fill-height fluid>
                      <v-layout align-center>
                        <v-flex xs12 text-xs-center flexbox>
                          <div class="headline">希腊</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex d-flex xs12 md8>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-layout row>
                <v-flex d-flex>
                  <v-hover>
                    <v-card
                      slot-scope="{ hover }"
                      class="mx-auto"
                      color="grey lighten-4"
                    >
                      <v-img
                        class="white--text"
                        width="400"
                        :src="require('@/assets/travel/b_02.png')"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                          >
                            <v-container fill-height fluid>
                              <v-layout align-center>
                                <v-flex xs12 text-xs-center flexbox>
                                  <div class="headline">澳大利亚</div>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-flex>
                <v-flex d-flex>
                  <v-hover>
                    <v-card
                      slot-scope="{ hover }"
                      class="mx-auto"
                      color="grey lighten-4"
                    >
                      <v-img
                        class="white--text"
                        width="400"
                        :src="require('@/assets/travel/b_03.png')"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                          >
                            <v-container fill-height fluid>
                              <v-layout align-center>
                                <v-flex xs12 text-xs-center flexbox>
                                  <div class="headline">西班牙</div>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex d-flex>
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  class="mx-auto"
                  color="grey lighten-4"
                >
                  <v-img
                    class="white--text"
                    width="810"
                    height="200"
                    :src="require('@/assets/travel/b_04.png')"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-container fill-height fluid>
                          <v-layout align-center>
                            <v-flex xs12 text-xs-center flexbox>
                              <div class="headline">葡萄牙</div>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout class="section" row wrap>
      <v-flex xs12 md12 lg12 my-4>
        <div class="display-1 font-weight-bold">主题游</div>
      </v-flex>
      <v-flex xs4 md3 lg3>
        <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              flat
            >
              <v-img :src="require('@/assets/travel/5_21.jpg')" :aspect-ratio="16/9">
                <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <v-container fill-height fluid>
                        <v-layout align-center>
                          <v-flex xs12 text-xs-center flexbox>
                            <div class="headline">休闲赏景</div>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </div>
                  </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs4 md3 lg3>
        <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              flat
            >
              <v-img :src="require('@/assets/travel/5_22.jpg')" :aspect-ratio="16/9">
                <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <v-container fill-height fluid>
                        <v-layout align-center>
                          <v-flex xs12 text-xs-center flexbox>
                            <div class="headline">狩猎海钓</div>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </div>
                  </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs4 md3 lg3>
        <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              flat
            >
              <v-img :src="require('@/assets/travel/5_23.jpg')" :aspect-ratio="16/9">
                <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <v-container fill-height fluid>
                        <v-layout align-center>
                          <v-flex xs12 text-xs-center flexbox>
                            <div class="headline">婚拍旅拍</div>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </div>
                  </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs4 md3 lg3>
        <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              flat
            >
              <v-img :src="require('@/assets/travel/5_24.jpg')" :aspect-ratio="16/9">
                <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <v-container fill-height fluid>
                        <v-layout align-center>
                          <v-flex xs12 text-xs-center flexbox>
                            <div class="headline">亲子游学</div>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </div>
                  </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
    </v-layout>
    <v-container class="section" grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 md12 lg12>
          <div class="title mb-4">#2018IG打卡胜地 #玩胜全球 #晋升网美系主任</div>
        </v-flex>
        <v-flex xs4 md1 lg1 mx-auto>
          <v-img
            max-width="100"
            :src="require('@/assets/travel/5_41.png')"
          >
          </v-img>
          <div class="body-2 my-2">希腊</div>
        </v-flex>
        <v-flex xs4 md1 lg1 mx-auto>
          <v-img
            max-width="100"
            :src="require('@/assets/travel/5_42.png')"
          >
          </v-img>
          <div class="body-2 my-2">海军海滩</div>
        </v-flex>
        <v-flex xs4 md1 lg1 mx-auto>
          <v-img
            max-width="100"
            :src="require('@/assets/travel/5_43.png')"
          >
          </v-img>
          <div class="body-2 my-2">雅典卫城</div>
        </v-flex>
        <v-flex xs4 md1 lg1 mx-auto>
          <v-img
            max-width="100"
            :src="require('@/assets/travel/5_44.png')"
          >
          </v-img>
          <div class="body-2 my-2">雪梨</div>
        </v-flex>
        <v-flex xs4 md1 lg1 mx-auto>
          <v-img
            max-width="100"
            :src="require('@/assets/travel/5_45.png')"
          >
          </v-img>
          <div class="body-2 my-2">葡萄牙</div>
        </v-flex>
        <v-flex xs4 md1 lg1 mx-auto>
          <v-img
            max-width="100"
            :src="require('@/assets/travel/5_46.png')"
          >
          </v-img>
          <div class="body-2 my-2">佩纳宫</div>
        </v-flex>
        <v-flex xs4 md1 lg1 mx-auto>
          <v-img
            max-width="100"
            :src="require('@/assets/travel/5_47.png')"
          >
          </v-img>
          <div class="body-2 my-2">墨尔本</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.'
  })
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
