<template>
<div v-if="path == 'SignIn' || path == 'SignUp'">
  <component :is="path"/>
</div>
  <div class="container" v-else>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

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
}
</script>

<style>
.content {
    margin-top: 5%;
}
</style>
