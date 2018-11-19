<template>
  <div id="hotelDetail">
    <v-container class="section" grid-list-md text-xs-center>
      <v-layout class="text-xs-left" row wrap>
        <v-flex xs4 md4 mt-4>
          <v-navigation-drawer
            stateless
            value="true"
          >
            <v-list>
              <v-list-tile @click="changeTab('one')">
                <v-list-tile-title>澳大利亚</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="changeTab('two')">
                <v-list-tile-title>希腊</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="changeTab('three')">
                <v-list-tile-title>西班牙</v-list-tile-title>
              </v-list-tile>

              <v-list-group
                no-action
                value="true"
              >
                <v-list-tile slot="activator">
                  <v-list-tile-title>葡萄牙</v-list-tile-title>
                </v-list-tile>

                <v-list-tile
                  v-for="(item, i) in items"
                  :key="i"
                  @click="changeTab(item[1])"
                >
                  <v-list-tile-title v-text="item[0]"></v-list-tile-title>
                  <v-list-tile-action>
                    <v-icon v-text="item[2]"></v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </v-list>
          </v-navigation-drawer>
        </v-flex>
        <v-flex xs8 md8 mt-8>
          <v-card flat v-if="this.tab === 'one'">
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="n in 9"
                :key="n"
                :src="require('@/assets/hotel/2/adll' + n + '.jpg')"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>
            <div class="subheading my-4">
              <div>
                <span class="display-1">迦</span>南澳洲
                查特沃斯庄园
                ·位于维多利亚州心脏地带，距离墨尔本以北约100公里，车程约1小时；
                ·3公里外坐落曼格洛尔机场（Mangalore Airport）。纳甘比镇至墨尔本市中心有城际列车。周边环绕多家澳洲知名酒庄及葡萄园，例如维州历史遗产、澳大利亚四大历史名庄之一的德宝酒庄（Tahbilk Winery）。10公里外的纳甘比镇及项目地周边地带，被誉为“维州马都”，曾培育出多匹国际马赛的冠军马。毗邻的纳甘比湖曾多次举办过澳大利亚划艇锦标赛。
              </div>
              <div class="my-4">
                •位于新南威尔士州Jervis Bay地区, 占地面积约20英亩；距离悉尼车程2.5小时，离著名景点Jervis Bay海边车程8分钟；物业包括一座农场式别墅、婚礼区域、花圃、水塘、动物农场及活动区域等。物业现作为度假屋进行出租，并不定期举行婚礼及活动；将对物业进行改造及升级，用于农场营地类型经营。
              </div>
              <div class="my-4">
                项目操作
                土地分割，整体方案设计，一级开发；
                服务式庄园设计, 建造及管理，现有老宅改造升级；
                农业生态园整体规划设计、打造、管理及运营参考澳洲市场的“House&Land Package”销售方式，百年英式会所可为12席庄园主提供庄园宅邸的私人定制服务，联合知名设计师和承建商来共同打造梦想庄园。周边土地将配有一流的服务配套设施，包括高尔夫练习场、马术、游艇、皮划艇、运动飞行等俱乐部，新会所将具备餐饮、SPA、红酒雪茄吧等时尚功能区，为12 位庄园主提供至尊生活体验，满足顶层人士海外移民、资产配置、休闲度假、商务接待、家族传承等各类需求。
              </div>
            </div>
          </v-card>

          <v-card flat v-if="this.tab === 'two'">
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="n in 15"
                :key="n"
                :src="require('@/assets/hotel/1/xl' + n + '.jpg')"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>
            <v-card-text>
              <div class="subheading my-4">
                <div>
                  <span class="display-1">圣</span>托里尼岛，也被称为锡拉岛，是位于爱琴海基克拉迪群岛最南端的希腊岛屿之一，其古老的火山活动历史造就了如今引人注目的景观。在3000年前的史前时期，由于火山爆发而形成的火山口和黑色沙滩，使此地闻名于世。“圣托里尼岛和基克拉泽斯群岛交融汇合形成了一个巨大的潟湖，居高临下可将美景尽收眼底、兼收并蓄。这里有可爱的画廊，繁华的夜生活和优良的葡萄酒。”(TripAdvisor)
                  圣托里尼岛因其令人惊叹的美景和壮丽的日落，称为全球最受欢迎和拍照最多的旅游胜利之一。
                </div>
                <div></div>

                <div class="mt-4">旅游数据统计</div>
                <div>预计2017年圣托里尼岛的游客总数将首次超过200万人次。越来越多的人会优先考虑圣岛作为婚礼目的地，同时此地也是“蜜月夫妻”选择举办婚礼和接待客人的首选方案，亦是婚礼摄影的最佳选择之一。</div>
                <div>婚礼和度蜜月市场在过去几年迅速发展：2016年在岛上举办了约750场婚礼，相比于1998年仅150场婚礼而言，增长迅猛。自2012年以来，机场抵达人数也在大幅增加。2017年飞机抵达数量超过90万架次；2012年至2017年的复合年增长率为20%。大量国际游客通过雅典转机入境，其人数占总入境人数的近50%。意大利，德国，和英国是圣托里尼游客来源的主要市场，占比为60%。2017年轮渡到达圣托里尼岛的人数有所下降，这是因为地中海游船市场的整体下降所导致的。但这一下降被增长的飞机到达游客所弥补。</div>

                <div class="my-4">
                  圣托里尼岛的旅游季节（旺季）每年从4月到10月（7个月），是地中海区域旅游季最长的目的地之一。
                  近些年，圣托里尼岛上的酒店平均入住率一直在上升，同时旅游季也在过去几年逐渐延长。
                  希腊旅游部和圣岛上酒店经营者正在共同努力，旨在将圣托里尼变成一个全年无休的旅游目的地。
                </div>
                <div class="my-4">
                  2017年，圣岛上的四星级酒店每晚平均价格ADR（1）为265欧元，旅游季入住率上升至81.7％；而2012年这些数字分别为210欧元和73％（ADR上升26％，入住率上升870bps）。
                  2017年，岛上的五星级酒店平均ADR为469欧元，旅游季入住率为92.1％；而2012年各自的数字分别为337欧元和83.4％（ADR增加39％，入住率增加870bps）
                  在Caldera（悬崖上可以看到圣岛特色白色建筑群和火山）的豪华五星级酒店，在旺季期间的价格从500欧元到1000欧元不等，而且呈上升趋势。在Oia （圣岛北面的小镇，以看全球最美的日落而闻名），这个数字从700欧元到1000欧元不等。
                </div>
              </div>
            </v-card-text>
          </v-card>

          <v-card flat v-if="this.tab === 'three'">
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="n in 37"
                :key="n"
                :src="require('@/assets/hotel/3/hccsd' + n + '.jpg')"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>
            <div class="subheading my-4">
              <div>
                <span class="display-1">该</span>物业位于西班牙最大的城市马德里。马德里市拥有约320万居民（马
                德里大区有650万人口）。
                该物业位于马德里市Center大区的CuestadeSantoDommg大街11号，是该马德里最有人气的旅游居住地区之一。从这个位置出发，可以方便的
                到达各个商业中心和休闲娱乐场所，领略马德里丰富的爹样性和文化。该区位本身同时也是一个较为理想的居住地，各种生活设施近在咫尺。
              </div>
              <div class="my-4">
                马德里市是最受欢迎的旅游目的地之一。2017年，有超过930万游客抵达马德里市的酒店（比2016年增加3%)。
                该资产靠近马德里的许多标志性区域。距离GranVh购物大街和马德里主要购物区Cdko仅只有100米的距离。
                该旅游公寓还靠近马德里主要的名胜古迹，商业和政治机构，如马德里市政厅，马德里歌剧院，国会，皇宫，太阳门广场和丽池公园。
                该物业于2017年年底全部重新装修完毕。整栋楼有8个楼层（底层+7层），21
                间服务式公寓，1间商铺，和地下室。公寓设有一卧室，两卧室和三卧室等房
                型。顶楼有一间Penthouse带两个大阳台。
                物业位置靠近马德里最受游客欢迎的部分地区，使这楼成为做旅游公寓项目的
                最佳选择。
              </div>
              <div class="my-4">
                每间公寓的套内面积从46.04平方米至111.56平方米，底商面积251.25平米。大楼总建筑面积为2700平方米左右。
                两室或三室的公寓都有两间浴室，一室的公间有一间浴室。每层有三套公寓，
                共有六种不同的房型。
                公寓的室内装修考究，选材和设计都十分优秀，由当地知名设计公司Petms设
                计。
              </div>
              <div class="my-4">
                该物业目前运营正常，对外f短期旅游公寓出租。该建筑的年入住率为70%-
                80%，每晚平均价格为150欧兀，在booking.com上的评分达到9.2/10，还被评
                为马德里十佳服务式公寓。
                目前，该建筑的运营商是HomeSelect，一家拥有超过14年经验的西班牙物业运
                营公司。公司有95名员工，提供物业管理服务，通过管理短租豪华公寓，确保
                客户获得高投资利润。HomeSelect管理着西班牙超过580处房产：300多个月
                租公寓，180多个日租公寓，以及100多间长租公寓。
              </div>
            </div>
          </v-card>

          <v-card flat v-if="this.tab === 'four_1'">
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="n in 37"
                :key="n"
                :src="require('@/assets/hotel/4/1/combro77' + n + '.jpg')"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>
            <div class="subheading my-4">
              <span class="display-1">小</span>户型之王

              坐落于桑托斯广场和贾梅士广场之间的Combro 77（以下简称“C77”），为珈南主推的充满青春气息的精装小户型建筑, “小时尚”的设计理念更加能迎合现代年轻人的城市需求。建筑风格采用经典的城市新古典主义风格，稳重大气而更具时代感，与周围古老的街道形成共鸣。

              <div class="my-4">
                C77共计4层，由一层的沿街商铺和楼上的小一房和一室户组成，面积从35平米至70平米不等，户型布局合理。C77由葡萄牙本地著名建筑设计师曼纽尔. 布宜诺斯艾利斯. 马特乌斯设计，简约处透露着华丽与尊贵，营造出奢华低调的经典气质。
                底楼的沿街商铺位于里斯本主要道路Rua das Gaivotas和Rua do Poco Dos Negros的交汇处，将为坐落于此的商家带来充足的客源。而楼上的房间则在设计中非常注重空间和光线的立体搭配，力求通过结构形式、空间尺度和光线的变化，营造了全方位的美感。顶楼凸窗的设计在欧式古典符号中巧妙地融入了现代气息，在增添居家景致的同时，丰富了立体的层次感。精致的建筑细节，使人在居住意境中品味传世古典风情。
              </div>
            </div>
          </v-card>

          <v-card flat v-if="this.tab === 'four_2'">
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="n in 41"
                :key="n"
                :src="require('@/assets/hotel/4/2/lfsac' + n + '.jpg')"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>
            <div class="subheading my-4">
              <span class="display-1">里</span>斯本度假首选

              Combro7位于里斯本繁华的市中心区域，地段极佳；座落在“人”字尖端的风水宝地，毗邻贾梅士广场（Largo de Camoes）,与里斯本上城（Bairro Alto）和希亚多广场（Chiado）只有一步之遥。Combro7位于圣卡塔琳教区中心，在历史氛围中绽放着时尚气息，交通便利，名副其实的位置之王。

              <div class="my-4">
                曼妞尔艾利斯 马特斯历史与时尚的碰撞，诞生了Combro7,他给古老安东尼、索萨马赛、博士广场（Largo Doutor Antonio de Sousa Macedo）注入了生机勃勃的气息。Combro7是贵族与现代生活的完美结合。他给古老的Largo Doutor Antonio de Sousa Macede广场注入了生机勃勃的气息。Combro7是贵族与现代生活的完美结合。公寓从70平米到100平米不等，包括1室户和2室户两种户型，结构设计合理。
              </div>
            </div>
          </v-card>

          <v-card flat v-if="this.tab === 'four_3'">
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="n in 43"
                :key="n"
                :src="require('@/assets/hotel/4/3/Gaivotas' + n + '.jpg')"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>
            <div class="subheading my-4">
              <span class="display-1">与</span>外交部长为邻

              海鸥18地理位置优越，地处里斯本历史中心的核心，距离希亚多（Chiado）仅500米，与未来的EDP总部和议会大楼相距200米，交通便利，而且还可以与现任外交部长做邻居。

              <div class="my-4">
                海鸥18是市中心稀缺大户型跃层房产，共计4层，为了确保设计的空间感和时尚性，设计师不仅精心设计了方便居住，豪华大气的跃层房，更提供了小清新类的错层设计，这让我们的海鸥18集奢华大气与清新明朗于一身，让人忍不住要惊叹于，这是多么完美的设计啊。 感谢建筑师诺昂圣丽的设计，重新赋予了海鸥18，这座百年老建筑青春活力，让他在海鸥街道得到重生。海鸥18让您瞬间体验古老里斯本的魅力和历史，同时享受舒适的现代生活。
              </div>
            </div>
          </v-card>

          <v-card flat v-if="this.tab === 'four_4'">
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="n in 24"
                :key="n"
                :src="require('@/assets/hotel/4/4/lfsaf112' + n + '.jpg')"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>
            <div class="subheading my-4">
              <span class="display-1">贸</span>易广场的尊荣选择

              F112位于里斯本的自由大道旁，自由大道被誉为里斯本的香榭丽舍大街，F112这幢古老的建筑就静静的矗立在这条古老时尚的大街里，自由大道是里斯本最繁华、最美丽的街道，这是一个对葡萄牙历史影响深远的区域。F112就这样被包围在浓浓的古老欧洲历史里。

              <div class="my-4">
                被历史包裹着的F112，除了古老的外貌外，拥有一颗时尚的“心”。现代时尚的的大气设计，让每一套房都更具空间感，古老街区核心位置的大户型设计，一层一户的架构，在这样的稀缺地块更显难能可贵。
              </div>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'one',
      items: [
        ['里斯本Combro77', 'four_1'],
        ['里斯本Combro7', 'four_2'],
        ['里斯本Gaivotas18', 'four_3'],
        ['里斯本Fanqueiros112', 'four_4'],
      ],
    };
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
    },
  },
};
</script>

