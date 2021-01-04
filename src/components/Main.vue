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
            {{ currentPrice | formatCurrency }}
          </td>
          <td>-</td>
          <td>
            <input type="number" name="" id="" v-model="buyCount" min="0" step="0.1" placeholder="0"/>
            <button
              class="btn btn-primary"
              :disabled="currentPrice * buyCount > $store.state.balance"
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
import axios from "axios";
export default {
  components: {
    VisualChart,
  },
  data() {
    return {
      currentPrice: 0,
      buyCount: 0,
    };
  },
  mounted() {
    this.getCurrentRatio();
  },
  methods: {
    buy() {
      this.$store.commit("buy", {
        buyCount: this.buyCount * this.currentPrice,
        amount: +this.buyCount,
      });
    },
    getCurrentRatio() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          this.currentPrice = response.data.bpi.USD.rate_float;
          this.$store.dispatch("getCurrentPrice", this.currentPrice);
        });
      setInterval(() => {
        axios
          .get("https://api.coindesk.com/v1/bpi/currentprice.json")
          .then((response) => {
            this.currentPrice = response.data.bpi.USD.rate_float;
            this.$store.dispatch("getCurrentPrice", this.currentPrice);
          });
      }, 30000);
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