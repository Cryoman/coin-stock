<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    Header
  },
}
</script>

<style>
.content {
    margin-top: 5%;
}
</style>
