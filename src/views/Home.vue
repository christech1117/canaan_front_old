<template>
  <div id="home">
    <!-- section2 -->
    <v-container class="section" grid-list-md text-xs-center>
      <v-layout class="text-xs-left" row wrap>
        <v-flex xs6 md6 lg6>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey lighten-4"
              max-height="600"
              to="/hotel"
            >
              <v-img :src="require('@/assets/home/1_11.jpg')" :aspect-ratio="1.7">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <div class="headline">海外资产配置</div>
                          <div class="subheading">美元进入加息周期，境内投资风险逐步聚集，全球资产配置时代来临。</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs6 md6 lg6>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey lighten-4"
              max-height="600"
              to="/fund"
            >
              <v-img :src="require('@/assets/home/1_12.jpg')" :aspect-ratio="1.7">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <div class="headline">海外资产运营</div>
                          <div class="subheading">布局全球热点旅游城市，打造两大精品住宿系列</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs6 md4 lg4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey lighten-4"
              max-width="400"
              to="/travel"
            >
              <v-img :src="require('@/assets/home/1_13.jpg')" :aspect-ratio="16/9">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <div class="headline">海外生活体验</div>
                          <div class="subheading">慢生活享受式度假，100</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs6 md4 lg4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey lighten-4"
              max-width="400"
              to="/fund"
            >
              <v-img :src="require('@/assets/home/1_14.jpg')" :aspect-ratio="16/9">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <div class="headline">基金公告</div>
                          <div class="subheading">点击查看详情>>></div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs6 md4 lg4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey lighten-4"
              max-width="400"
              to="/about"
            >
              <v-img :src="require('@/assets/home/1_15.jpg')" :aspect-ratio="16/9">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <div class="headline">关于</div>
                          <div class="subheading">迦南资本是专注于资产全球化配置与运营和深度海外生活体验</div>
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
    </v-container>
    <!-- section3 -->
    <div class="section">
      <v-layout class="text-xs-left" row wrap transition="slide-y-transition">
        <v-flex xs12 md9 lg-9>
          <v-card>
            <v-img
              class="white--text"
              height="450px"
              :src="require('@/assets/home/1_21.jpg')"
            >
              <v-container fill-height fluid>
                <v-layout fill-height align-center>
                  <v-flex xs1 md1 lg1></v-flex>
                  <v-flex xs12 md7 lg7>
                    <div class="subheading mb-3">迦南资本致力于为社会公益事业奉献自己的力量。公司控股股东李晓东先生在汶川地震时亲自带领团队入住灾区，为重建募集资金，与灾区同胞同甘共苦。</div>
                    <div class="subheading mb-3">多年来，迦南人不忘初心，始终秉持无私、无畏的精神致力于社会公益事业，力所能及地奉献爱心。</div>
                    <div class="subheading mb-3">从四川什邡灾后重建让特殊孩子和残疾人士都能接受现代化教育，到上海真爱梦想公益基金会让孩子自信、从容、有尊严地成长。迦南公益，一直在路上。</div>
                  </v-flex>
                  <v-flex xs3 md3 lg5 text-xs-center>
                    <div class="display-1">公益与回馈</div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout class="text-xs-left" row wrap justify-end style="margin-top: 20px">
        <v-flex xs12 md9 lg-9>
          <v-card>
            <v-img
              class="white--text"
              height="450px"
              :src="require('@/assets/home/1_22.jpg')"
            >
              <v-container fill-height fluid>
                <v-layout fill-height align-center>
                  <v-flex xs3 md5 lg5 text-xs-center>
                    <div class="display-1">荣誉</div>
                  </v-flex>
                  <v-flex xs12 md7 lg7>
                    <div class="subheading mb-4">迦南资本是首批注册于上海自贸区的资产管理公司，并在中国证券基金业协会备案，成为开展私募证券投资、股权投资、创业投资等私募基金业务的金融机构，在第四届全球房地产金融峰会中获“2015年度最佳创新实践海外基金公司”。</div>
                  </v-flex>
                  <v-flex xs1 md1 lg1></v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <v-dialog v-model="dialog" persistent width="800px">
      <v-card>
        <v-card-title class="grey lighten-2">
          <span class="headline">重要提示</span>
        </v-card-title>
        <v-card-text>
          <div>在继续浏览本公司网站前，请您细阅此重要提示，并向下滚动至本页结尾根据您的具体情况进行选择。 在继续浏览本公司网站前，请您确认您或您所代表的机构是一名“合格投资者”。“合格投资者”是指：（1）根据中华人民共和国境内法律法规，尤其是中国证监会《私募投资基金监督管理暂行办法》所规定的“合格投资者”，或（2）根据中华人民共和国香港特别行政区《证券及期货条例》所定义的“专业投资者”，或（3）根据美国的证券和投资法规所定义的“合格买方”或“有资格投资者”，或（4）其他任何国家和地区的证券和投资法规所规定的有资格投资于对冲基金或类似的集合理财计划的专业投资者。如您或您所代表的机构对自身是否属于“合格投资者”存有疑问的，请咨询您或您所代表机构聘请的律师、法律顾问或其他法律专业人员。</div>
          <div>您若继续阅览本网页所载资料，将被视为您声明及保证为“合格投资者”，并将遵守对您适用的司法区域的有关法例及法规。
          本网站所载的资料仅供参考，并不构成广告或分销、销售要约，或招揽买入任何证券、基金或其他投资工具的邀请或要约。
          投资涉及风险，投资者应详细审阅基金的发售文件以获取进一步资料及了解有关投资于新兴市场所涉及之风险因素，并寻求适当的专业投资和税务咨询意见。基金的股份或单位价格及其收益可升可跌，而过往的基金表现数据并不预示基金未来的表现。 本网站所提供的资料并非投资建议或税务咨询意见，投资者不应依赖本网站所提供的资料作出投资决策。</div>
          <div>上海珈南资产管理公司或其关联公司、董事、监事、高级管理人员及任何雇员不对本网站所提供资料的准确性、充足性或完整性作出任何保证，也不对于本网站内所提供资料之任何错误或遗漏承担任何法律责任。您在任何情况下均不得复印、复制或再分发本网站资料的全部或其任何部分。
          本网站所刊载的所有资料上海珈南资产管理公司可予以更改或修订而毋须前事通知，上海珈南资产管理公司并不承诺定期更新本网页。
          与本网站所载资料有关的所有版权、专利权、知识产权及其他产权均为上海珈南资产管理公司或其关联公司所有。本公司概不向浏览该资料的人士发出、转让或以任何方式转移任何种类的权利。</div>
        </v-card-text>

        <v-card-actions>
          <v-btn block color="info" @click="dialog = false">我确认我或我所代表的机构是一名 "合格投资者" ，而且同意接受上述所有条件和条款。</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn block color="secondary" @click="closeWindow()">我或我所代表的机构不是一名 "合格投资者" ，或者我/我们不同意接受上述所有条件和条款。</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    closeWindow() {
      window.location.href = 'about:blank';
      window.close();
    },
  },
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
