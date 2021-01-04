<template>
<nav class="navbar navbar-expand-md navbar-dark bg-info">
  <router-link class="navbar-brand" to="/">Coinstock Training</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/assets">Assets</router-link>
      </li>
    </ul>
    <span class="navbar-text text-white">
      Balance: {{balance | formatCurrency}}
    </span>
  </div>
</nav>
</template>
<script>
export default {
  computed: {
    balance() {
      return this.$store.state.balance
    }
  }
}
</script>
