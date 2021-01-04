<template>
  <div class="content">
    <h2>Your Assets</h2>
    <pre>
        Bitcoin: {{ getAssets }}
        Total assets sum: {{ getTotalAssets | formatCurrency }}
    </pre>
    <form class="form-inline">
      <div class="form-group mx-sm-3">
        <input type="number" class="form-control" min="0" step="0.1" placeholder="0" v-model="sellCount"/>
      </div>
      <button class="btn btn-danger" :disabled="sellCount > getAssets" @click.prevent="sell">Sell</button>
    </form>
  </div>
</template>
<script>
export default {
    data() {
        return {
            sellCount: 0
        }
    },
  computed: {
    getAssets() {
      return this.$store.state.ownAssets.toFixed(3);
    },
    getTotalAssets() {
      return this.$store.getters.getTotalAssets;
    },
  },
  methods: {
    sell() {
      this.$store.commit("sell", {
        sellCount: this.sellCount * this.$store.state.currentPrice,
        amount: +this.sellCount,
      });
    },
  },
};
</script>