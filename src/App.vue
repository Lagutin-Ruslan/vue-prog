<template>
  <v-app>
    <v-card>
      <v-navigation-drawer
        class="box-my"
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="@/img/baks.svg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Аналитика</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home-city</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link tag="v-list-item-title" to="/offer"
                >Все офферы</router-link
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link tag="v-list-item-title" :to="'/statistics'"
                >Статистика</router-link
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-group-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link tag="v-list-item-title" :to="'/contacts'"
                >Контакты</router-link
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <div class="wrap-my">
        <v-bottom-navigation
          :value="activeBtn"
          color="primary"
          horizontal
          class="flex-my"
        >
          <v-btn 
          @click.prevent="hiddenAlert"
          style="position: reletive">
            <span>Уведомления</span>
            <div id="toch">*</div>
            <v-icon>mdi-email</v-icon>
          </v-btn>

          <div class="text-center" style="height: 56px">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="transporent" dark v-bind="attrs" v-on="on">
                  <v-img
                    src="@/img/foto.png"
                    width="30px"
                    height="30px"
                    style="border-radius: 50%"
                  ></v-img>
                  Личный кабинет
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title style="cursor: pointer">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-bottom-navigation>
      </div>

      <v-alert
        v-if="showAllert"
        type="success"
        style="position: fixed; bottom: 0; right: 0; z-index: 222; opacity: 0.8"
      >
        {{ textAllert }}
      </v-alert>
    </v-card>

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true,
      mini: true,
      activeBtn: 1,
      items: [{ title: "Мой профиль" }, { title: "Выйти" }],
      showAllert: false,
      arrMessage: [
        'Вам одобрен кредит!',
        'ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ!',
        'АКЦИЯ! "1 + 1 = 3"',
        'Только сегодня, по выгодной цене',
        'НЕ МОЖЕТ БЫТЬ!!! за 1 руб!',
      ],
      textAllert: ''
    };
  },
  watch: {
    mini(newDrawer, newMini) {
      localStorage.drawer = newDrawer;
      localStorage.mini = newMini;
    },
  },
  mounted() {
    if (localStorage.drawer || !localStorage.drawer) {
      this.drawer = JSON.parse('true', localStorage.drawer) ;
    }
    if (localStorage.mini) {
      this.mini = JSON.parse('true', localStorage.mini);
    }
  },
  methods: {
    hiddenAlert() {
      this.textAllert = this.arrMessage[Math.floor(Math.random() * this.arrMessage.length)]
      this.showAllert = !this.showAllert
      setTimeout (() => {
        this.showAllert = false
      }, 5000)
      
    },
  }
};
</script>

<style scoped>
.box-my {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 444;
}
.wrap-my {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 333;
}
.v-item-group.v-bottom-navigation {
  justify-content: flex-end;
}
#toch {
  position: absolute;
  color: red;
  width: 10px;
  height: 10px;
  font-size: 20px;
  top: 10px;
  left: 20px;
}
</style>