<template>
<div v-if="path == 'SignIn' || path == 'SignUp'">
  <component :is="path"/>
</div>
  <div class="container" v-else>
    <Header/>
    <a @click.prevent="setLocale('ru')" class="lang">Русский</a> |
    <a @click.prevent="setLocale('en')" class="lang">English</a>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import getCurrentPrice from "./getCurrentPrice";

export default {
  components: {
    Header,
    SignIn,
    SignUp
  },
  computed: {
    path() {
      return this.$route.name
    }
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  },
   mounted() {
      getCurrentPrice(this.$store);
  },
}
</script>

<style>
.content {
    margin-top: 5%;
}
.lang {
  cursor: pointer;
}
.lang:hover {
  color: rgb(20, 201, 224) !important;
}
</style>
