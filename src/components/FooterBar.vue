<template>
  <v-footer
    style="background-color:white"
    height="auto"
  >
    <v-layout row wrap>
      <v-flex xs12 md12 style="margin-top: 1000px">
        <v-img
          :src="require('@/assets/map.png')"
        >
        </v-img>
      </v-flex>
      <v-flex xs12 md12>
            <v-card
          flat
          tile
          class="lighten-1 white--text text-xs-center"
          color="#042433"
        >
          <v-card-text>
            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>
                <v-flex xs12 md1 lg2></v-flex>
                <v-flex xs12 md9 lg8>
                  <div class="headline mb-3">联系我们</div>
                  <div class="body-2">上海公司地址：上海市静安区静安区南京西路819号3楼133室</div>
                  <div class="body-2">　　　　　　　邮编：200041　总机号码：+86 21-58888566　传真号码：+86 21-58883586</div>
                  <div class="body-2">澳洲公司地址：23 Dawson Avenue,Brighton,VIC 3186（Melbourne）</div>
                  <div class="body-2">　　　　　　　Suite 47,Level 20,Tower 2,201 Sussex Street,Sydney,NSW 2000（Sydney)</div>
                  <div class="body-2">欧洲公司地址：Beco do Carrasco,n°10 1200-096 Lisbon (Lisbon)</div>
                  <div class="body-2">　　　　　　　Cuesta Santo Domingo, 11 28013 Madrid, Spain（Madrid）</div>
                  <div class="body-2">产品热线：400-888-5957</div>
                </v-flex>
                <v-flex xs12 md2 lg2>
                  <v-img
                    max-width="150"
                    :src="require('@/assets/qrcode.png')"
                  >
                  </v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            <span>© 2018 All rights reserved. 沪ICP备05028299号 上海珈南资产管理有限公司</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  })
};
</script>
