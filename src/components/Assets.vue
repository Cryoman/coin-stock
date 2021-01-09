<template>
  <div class="content">
    <h2>Your Assets</h2>
    <pre>
        Bitcoin: {{ +getAssets.toFixed(3) }}
        Total assets sum: {{ getTotalAssets | formatCurrency }}
    </pre>
    <form class="form-inline">
      <div class="form-group mx-sm-3">
        <input
          type="number"
          class="form-control"
          min="0"
          step="0.1"
          placeholder="0"
          v-model="sellCount"
        />
      </div>
      <button
        class="btn btn-danger"
        :disabled="sellCount > getAssets"
        @click.prevent="sell"
      >
        Sell
      </button>
    </form>
  </div>
</template>
<script>
import getCurrentPrice from "../getCurrentPrice";
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
      // this.$store.commit("sell", {
      //   sellCount: this.sellCount * this.$store.state.currentPrice,
      //   amount: +this.sellCount,
      // });
      await this.$store.dispatch("sell", {
        balance: this.$store.getters.user.balance,
        ownAssets: this.$store.getters.user.ownAssets,
        sellCount: this.sellCount * this.$store.state.currentPrice,
        amount: +this.sellCount,
      });
      await this.$store.dispatch("fetchInfo");
      this.sellCount = 0;
  },
    },
  mounted() {
    if(!this.$store.currentPrice) {
      getCurrentPrice(this.$store);
    }
  }
};
</script>