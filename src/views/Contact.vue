<template>
  <div>
    <v-card
      flat
      tile
      class="lighten-1 text-xs-center"
    >
      <v-card-text>
        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>
            <v-flex xs4 md4 lg4 text-xs-right>
              <div class="mr-2">
                <img
                  style="width: 45px; margin: 0 10px 0 0;"
                  :src="require('@/assets/contact/contact_phone.png')" />
              </div>
              <!-- <div class="mt-3 mr-2">
                <img
                  style="width: 45px; margin: 0 10px 0 0;"
                  :src="require('@/assets/contact/contact_email.png')" />
              </div> -->
              <div class="mt-3 mr-2">
                <img
                  style="width: 45px; margin: 0 10px 0 0;"
                  :src="require('@/assets/contact/contact_address.png')" />
              </div>
            </v-flex>
            <v-flex xs7 md7 lg7>
              <v-layout row wrap>
                <v-flex xs6 md3 lg3>
                  <div class="body-2">总机：</div>
                  <div>+8621-58888566</div>
                </v-flex>
                <v-flex xs6 md6 lg6>
                  <div class="body-2">传真：</div>
                  <div>+8621-58883586</div>
                </v-flex>
              </v-layout>
              <!-- <div class="body-2 mt-4">邮箱</div>
              <div>xxxx@gmail.com</div> -->
              <div class="body-2 mt-4">地址Address：</div>
              <div>上海市静安区静安区南京西路819号3楼133室(邮编: 200041)</div>
              <div>Room03-133, No.819 West Nanjing Road, Jing'an District, Shanghai, China(200041)</div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

</style>
