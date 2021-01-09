<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-info">
    <router-link class="navbar-brand" to="/">Coinstock Training</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active dropdown" v-if="!name">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sign In/Sign Up
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/signin">Sign In</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" to="/signup">Sign Up</router-link>
          </div>
        </li>
        <li class="nav-item" v-else>
          <router-link class="nav-link text-white" style="cursor: default" @click.prevent="" to=""
            >{{`Hello, ${name}`}}</router-link
          >
        </li>
        <li class="nav-item" v-if="name">
          <router-link class="nav-link text-white" to="/assets"
            >Assets</router-link
          >
        </li>
        <li class="nav-item" v-if="name">
          <a class="nav-link text-white" style="cursor: pointer" @click.prevent="logout" to="#"
            >Sign Out</a
          >
        </li>
      </ul>
      <span class="navbar-text text-white">
        Balance: {{ balance | formatCurrency }}
      </span>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    balance() {
      return this.$store.getters.user.balance || 0;
    },
    name() {
      return this.$store.getters.user.name;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  async mounted() {
    if(!Object.keys(this.$store.getters.user).length) {
      await this.$store.dispatch('fetchInfo')
    }
  }
};
</script>

