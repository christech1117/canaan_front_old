<template>
  <div id="about">
    <v-container grid-list-md text-xs-center class="section">
      <v-layout row wrap>
        <v-flex xs12 md12>
          <v-card flat tile class="lighten-1 text-xs-center">
            <v-card-text>
              <div class="display-1 font-weight-bold">关于迦南资本</div>
              <div class="subheading text-xs-left my-4"><span class="display-1">迦</span>南资本是专注于资产全球化配置与运营和深度海外生活体验。“迦南”的名字来自于圣经《出埃及记》中的迦南美地，一块“流着奶和蜜”的上帝应许之地。“迦南”代表着我们的期望，暨在资产配置大航海时代，为中国资本出海保驾护航，寻找最理想的居住地，做您享受海外生活领航员。</div>
              <div class="subheading text-xs-left my-4">公司业务包括海外资产配置、海外资产运营、海外生活体验三大板块，满足您的不同需求。</div>
              <div class="subheading text-xs-left my-4">迦南资本目前已在上海、香港、美国、澳洲、欧洲设有资产管理平台，其中迦南上海是首批注册于上海自贸区的资产管理公司，已于中国证券基金业协会备案，并拥有私募基金牌照，同时和各大移民机构保持长期合作。</div>
            </v-card-text>
          </v-card>
          <v-img
            max-width="800"
            :src="require('@/assets/about/2_1.png')"
            style="margin: 0 auto"
          >
          </v-img>
          <!-- <video width="80%" controls>
            <source src="@/assets/information.mp4" type="video/mp4">
          </video> -->
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md text-xs-center class="section">
      <v-layout row wrap>
        <v-flex xs12 md12>
          <div class="display-1 font-weight-bold">董事长致辞</div>
        </v-flex>
        <v-flex xs12 md12 mb-4>
          <v-img
            class="white--text my-4"
            max-height="50"
            max-width="50"
            :src="require('@/assets/comma.png')"
          >
          </v-img>
          <div class="title my-4">迦南资本将以专业的精神为投资者服务，欢迎投资者参与到迦南资本的项目中来，共同分享海外地产投资的成果。</div>
        </v-flex>
        <v-flex xs12 md4 lg5 my-4 mr-4 ml-4>
          <div>
            <v-img
              class="white--text my-4"
              height="390px"
              :src="require('@/assets/about/founder.png')"
            >
            </v-img>
            <div class="subheading mt-3">创办人 <span class="title">李晓东</span></div>
          </div>
        </v-flex>
        <v-flex xs12 md7 lg6 my-4>
          <div class="subheading text-xs-left my-4"><span class="display-1">随</span>着中国经济改革的全面深化和提速，国内家庭财富的积累对于海外置业及全球资产配置的需求日益迫切；同时，全球经济一体化的发展使得人民币的可自由兑换即将成为可能。为了因应这样的发展趋势，2013年底，上海迦南资产管理有限公司（“迦南资本”）正式在上海自贸区注册成立，成为区内第一家专注于海外地产投资的房地产基金公司。 随着未来利率市场化，人民币国际化这两个进程节奏，迦南资本的控股股东——建银精瑞资本管理集团在海外投资积极部署。作为“自贸区战略”的重要布局，迦南资本专注于海外房地产投资的PE基金管理公司，主要涉及海外地产投资，包括住宅、商业、办公等传统业态，未来也会涉足养老、旅游、酒庄、农场等非传统地产业态。现在国内流动性泛滥，人民币升值的压力比较大，积极的开拓海外投资也符合国家的政策。我们地产PE跟开发商做海外投资是完全不同的——开发商可能是去外面买一块地做开发，在当地销售或吸引国内客户购买，而地产PE更多是把金融特色突出。第一我们会全球布局，为投资人重点挖掘价值洼地；第二，我们的基金会跟当地银行合作，成立合资公司，充分整合当地资源。这样的商业模式非常清晰，投资周期也能够控制，而最重要的是，不同于开发商海外投资是追求企业盈利，地产PE能够让国内投资人分享到投资成果。</div>
        </v-flex>
        <v-flex xs12 md12 my-4>
          <div class="display-1 font-weight-bold my-4">团队成员</div>
        </v-flex>
        <v-flex xs12 md4 my-4>
          <div class="display-1">
            <v-avatar
              :size="avatarSize"
              color="grey lighten-4"
            >
              <img src="@/assets/about/teamPage_4_1.png" alt="avatar">
            </v-avatar>
            <div class="title mt-3">李晓东</div>
            <div class="body-1">Founder</div>
          </div>
        </v-flex>
        <v-flex xs12 md4 my-4>
          <div class="display-1">
            <v-avatar
              :size="avatarSize"
              color="grey lighten-4"
            >
              <img src="@/assets/about/teamPage_4_2.png" alt="avatar">
            </v-avatar>
            <div class="title mt-3">李若珺</div>
            <div class="body-1">Chief Financial Officer</div>
            <div class="body-1" style="margin: -20px">Chief Operating Officer</div>
          </div>
        </v-flex>
        <v-flex xs12 md4 my-4>
          <div class="display-1">
            <v-avatar
              :size="avatarSize"
              color="grey lighten-4"
            >
              <img src="@/assets/about/teamPage_4_3.png" alt="avatar">
            </v-avatar>
            <div class="title mt-3">于泽源</div>
            <div class="body-1">Chief Investment Officer</div>
          </div>
        </v-flex>
        <v-flex xs12 md4 my-4>
          <div class="display-1">
            <v-avatar
              :size="avatarSize"
              color="grey lighten-4"
            >
              <img src="@/assets/about/teamPage_4_4.png" alt="avatar">
            </v-avatar>
            <div class="title mt-3">惠无非</div>
            <div class="body-1">Managing Director-Canaan Eurpoe</div>
          </div>
        </v-flex>
        <v-flex xs12 md4 my-4>
          <div class="display-1">
            <v-avatar
              :size="avatarSize"
              color="grey lighten-4"
            >
              <img src="@/assets/about/teamPage_4_5.png" alt="avatar">
            </v-avatar>
            <div class="title mt-3">张文鲲</div>
            <div class="body-1">Managing Director-Canaan Australia</div>
          </div>
        </v-flex>
        <v-flex xs12 md4 my-4>
          <div class="display-1">
            <v-avatar
              :size="avatarSize"
              color="grey lighten-4"
            >
              <img src="@/assets/about/teamPage_4_6.png" alt="avatar">
            </v-avatar>
            <div class="title mt-3">艾华夏</div>
            <div class="body-1">Managing Director-Canaan Travel</div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarSize: '180px',
    };
  },
};
</script>

<style scoped>

</style>
