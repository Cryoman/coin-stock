<template>
    <form class="form-signin" @submit.prevent="submitLogin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <input
        type="email"
        class="form-control"
        placeholder="Email address"
        required=""
        autofocus=""
        v-model="email"
      />
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        required=""
        minlength="5"
        v-model="password"
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
            <router-link to="/">
        &#8592; Back
      </router-link>
    </form>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async submitLogin() {
            try {
                await this.$store.dispatch('login', {email: this.email, password: this.password});
                this.$router.push('/')
            }
            catch(e) {
                console.log(e)
            }
        }
    }
}
</script>
<style scoped>
.form-signin {
  width: 100%;
  height: 100vh;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  top: 50%;
}
input {
    margin-bottom: 10px;
}
</style>