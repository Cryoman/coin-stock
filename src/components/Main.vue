<template>
  <div class="content">
    <h3>Check your trading skills</h3>
    <hr />
    <p>
      Use your own virtual bank account buying and selling coins for real-time
      ratio and find out how much profit you able to get!
    </p>
    <VisualChart></VisualChart>
    <table>
      <thead>
        <tr>
          <td>Asset</td>
          <td>Price</td>
          <td>Dynamic</td>
          <td>Buy coins</td>
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
          <td>-</td>
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
              :disabled="$store.state.currentPrice * buyCount > $store.getters.user.balance"
              @click="buy"
            >
              Buy
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import VisualChart from "./VisualChart";
import getCurrentPrice from "../getCurrentPrice";
export default {
  components: {
    VisualChart,
  },
  data() {
    return {
      buyCount: 0,
    };
  },
  mounted() {
    getCurrentPrice(this.$store);
  },
  computed: {
    price() {
      return this.$store.state.currentPrice;
    }
  },
  methods: {
    async buy() {
      await this.$store.dispatch("buy", {
        balance: this.$store.getters.user.balance,
        ownAssets: this.$store.getters.user.ownAssets,
        buyCount: this.buyCount * this.$store.state.currentPrice,
        amount: +this.buyCount,
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