<template>
<nav class="navbar navbar-expand-md navbar-dark bg-info">
  <router-link class="navbar-brand" to="/">Coinstock Training</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/portfolio">Portfolio</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/coins">Buy coins</router-link>
      </li>
    </ul>
    <span class="navbar-text text-white">
      Balance: {{getBalance}}
    </span>
  </div>
</nav>
</template>
<script>
export default {
  data() {
    return {
      balance: 10000
    }
  },
  computed: {
    getBalance() {
      let formatter = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      });
      return formatter.format(this.balance);
    }
  }
}
</script>
