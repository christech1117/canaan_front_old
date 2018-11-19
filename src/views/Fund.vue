<template>
  <div id="fund">
    <v-container grid-list-md text-xs-center>
      <v-layout class="section text-xs-left my-4" row wrap>
        <v-flex xs6 md6 lg6>
          <v-card flat>
            <v-img :src="require('@/assets/fund/3_11.jpg')" :aspect-ratio="16/9"></v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline mb-2">
                  <img
                    style="width: 15px; margin: 0 10px 0 0;"
                    :src="require('@/assets/fund/diamond_icon.png')" />精品住宿
                </div>
                <div class="body-1">两大精品系列双星闪耀</div>
                <div class="body-1">Canaan Lifestyle-温馨、亲子、休闲，自由的大空间全配套住宿</div>
                <div class="body-1">Canaan Boutique-奢华、时尚、高端，核心地段的精品酒店公寓</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 md6 lg6>
          <v-card flat>
            <v-img :src="require('@/assets/fund/3_12.jpg')" :aspect-ratio="16/9"></v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline mb-2">
                  <img
                    style="width: 15px; margin: 0 10px 0 0;"
                    :src="require('@/assets/fund/diamond_icon.png')" />主题农场
                </div>
                <div class="body-1">农业土地整体规划及一级开发，农业生态园区打造，服务式庄园理念为古宅再添新彩</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 md6 lg6>
          <v-card flat>
            <v-img :src="require('@/assets/fund/3_13.jpg')" :aspect-ratio="16/9"></v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline mb-2">
                  <img
                    style="width: 15px; margin: 0 10px 0 0;"
                    :src="require('@/assets/fund/diamond_icon.png')" />土地投资
                </div>
                <div class="body-1">多年土地投资积淀，利用改性、分割及开发申请方式将使传统安全稳定的土地投资具备实现高收益的可能</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 md6 lg6>
          <v-card flat>
            <v-img :src="require('@/assets/fund/3_14.jpg')" :aspect-ratio="16/9"></v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline mb-2">
                  <img
                    style="width: 15px; margin: 0 10px 0 0;"
                    :src="require('@/assets/fund/diamond_icon.png')" />科技创投
                </div>
                <div class="body-1">置身于无人驾驶和旅行助理机器人风投核心圈，做海外智慧度假的领航者</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog1=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>迦南美地V期 欧洲策略投资基金投资经理变更公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog1" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">迦南美地V期 欧洲策略投资基金投资经理变更公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_1.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog2=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>迦南美地V期 欧洲策略投资基金重大事项变更公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog2" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">迦南美地V期 欧洲策略投资基金重大事项变更公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_2.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog3=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>迦南美地III期 策略投资B基金投资经理变更公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog3" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">迦南美地III期 策略投资B基金投资经理变更公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_3.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog4=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>迦南美地III期 策略投资A基金投资经理变更公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog4" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">迦南美地III期 策略投资A基金投资经理变更公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_4.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog5=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>迦南美地VI期 澳洲土地增值基金投资经理变更公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog5" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">迦南美地VI期 澳洲土地增值基金投资经理变更公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_5.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <!-- 4-6 -->
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog6=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>关于迦南美地VI期澳洲土地增值基金 第八次募集关闭的公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog6" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">关于迦南美地VI期澳洲土地增值基金 第八次募集关闭的公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_6.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <!-- 4-7 -->
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog7=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>关于迦南美地VI期澳洲土地增值基金 第七次募集关闭的公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog7" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">关于迦南美地VI期澳洲土地增值基金 第七次募集关闭的公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_7.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <!-- 4-8 -->
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog8=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>重大事项变更公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog8" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">重大事项变更公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_8.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <!-- 4-9 -->
            <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog9=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>重大事项变更公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog9" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">重大事项变更公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_9.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
      <!-- 4-10 -->
      <v-card>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            @click="dialog10=true"
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>关于迦南美地VI期澳洲土地增值基金 第六次募集关闭的公告</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-dialog v-model="dialog10" width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">关于迦南美地VI期澳洲土地增值基金 第六次募集关闭的公告</span>
            </v-card-title>
            <v-img
              class="white--text"
              :src="require('@/assets/fund/4_10.png')"
            >
            </v-img>
          </v-card>
        </v-dialog>
      </v-card>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false,
      dialog9: false,
      dialog10: false,
      items: [
        {
          icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014',
        },
        {
          icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014',
        },
        {
          icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014',
        },
      ],
      items2: [
        {
          icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014',
        },
        {
          icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014',
        },
      ],
    };
  },
};
</script>
