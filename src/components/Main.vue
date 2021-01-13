<template>
  <div class="content">
    <h3>{{ $t("descHeader") }}</h3>
    <hr />
    <p>
      {{ $t("desc") }}
    </p>
    <VisualChart v-if="currentData" :currentData="currentData"></VisualChart>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border text-info"></div>
    </div>
    <table>
      <thead>
        <tr>
          <td>{{ $t("asset") }}</td>
          <td>{{ $t("price") }}</td>
          <td>{{ $t("dynamic") }}</td>
          <td>{{ $t("buyCoins") }}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="https://bitcoin.org/img/icons/opengraph.png?1608131429"
              alt=""
            />
            Bitcoin
          </td>
          <td>
            {{ price | formatCurrency }}
          </td>
          <td :style="{ color: dynamic > 0 ? 'green' : 'red' }">
            {{ dynamic !== "-" ? `${dynamic}%` : dynamic }}
          </td>
          <td>
            <input
              type="number"
              name=""
              id=""
              v-model="buyCount"
              min="0"
              step="0.1"
              placeholder="0"
            />
            <button
              class="btn btn-primary"
              :disabled="
                $store.state.currentPrice * buyCount >
                $store.getters.user.balance
              "
              @click="buy"
            >
              {{ $t("buyButton") }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import VisualChart from "./VisualChart";
export default {
  components: {
    VisualChart,
  },
  data() {
    return {
      buyCount: 0,
    };
  },
  computed: {
    price() {
      return this.$store.getters.getCurrent;
    },
    currentData() {
      return this.$store.getters.getVisualData;
    },
    dynamic() {
      return this.$store.getters.getDynamic;
    },
  },
  methods: {
    async buy() {
      await this.$store.dispatch("buy", {
        balance: this.$store.getters.user.balance,
        ownAssets: this.$store.getters.user.ownAssets,
        buyCount: this.buyCount * this.$store.state.currentPrice,
        amount: +this.buyCount,
        controlPrice: this.$store.state.currentPrice,
      });
      await this.$store.dispatch("fetchInfo");
      this.buyCount = 0;
    },
  },
};
</script>
<style scoped>
img {
  width: 25px;
}
table {
  width: 100%;
  text-align: center;
}
button {
  margin-left: 10px;
}
</style>