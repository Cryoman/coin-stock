<template>
  <div class="content">
    <h2>{{$t('yourAssets')}}</h2>
    <pre>
        Bitcoin: {{ +getAssets.toFixed(3) }}
        {{`${$t('total')}: `}} {{ getTotalAssets | formatCurrency }}
    </pre>
    <form class="form-inline">

        <input
          type="number"
          class="form-control"
          min="0"
          step="0.1"
          placeholder="0"
          v-model="sellCount"
        />

      <button
        class="btn btn-danger"
        :disabled="sellCount > getAssets"
        @click.prevent="sell"
      >
        {{$t('sellButton')}}
      </button>
    </form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      sellCount: 0,
    };
  },
  computed: {
    getAssets() {
      return this.$store.getters.user.ownAssets || 0;
    },
    getTotalAssets() {
      return this.$store.getters.user.ownAssets * this.$store.state.currentPrice || 0;
    },
  },
  methods: {
    async sell() {
      await this.$store.dispatch("sell", {
        balance: this.$store.getters.user.balance,
        ownAssets: this.$store.getters.user.ownAssets,
        sellCount: this.sellCount * this.$store.state.currentPrice,
        amount: +this.sellCount,
      });
      await this.$store.dispatch("fetchInfo");
      this.sellCount = 0;
  },
  async check() {
    await this.$store.dispatch('visualize', this.$store.getters.getCurrent)
  }
    },
};
</script>
<style scoped>
button {
  margin-left: 10px;
}
@media (max-width: 768px) {
  .form-inline input {
    margin: 10px 0;
  }
  
  .form-inline {
    flex-direction: column;
    align-items: center;
  }
}
</style>