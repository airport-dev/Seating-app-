<template>
  <v-app dark>
    <v-container>
      <nav>
        <ul class="pa-4">
          <li @click="$router.push('/')">ホーム画面</li>
          <li @click="$router.push('/login')" class="red--text">
            ログイン画面
          </li>
          <li @click="$router.push('/setting')">グループ作成画面</li>
          <li @click="$router.push('/result')">抽選画面</li>
          <li @click="$router.push('/list')">確定しているグループ一覧画面</li>
        </ul>
      </nav>
    </v-container>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
