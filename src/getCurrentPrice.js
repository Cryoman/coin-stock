import axios from "axios";
export default function getCurrentRatio(context) {
   axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        context.dispatch("getCurrentPrice", response.data.bpi.USD.rate_float);
        context.dispatch('refreshData', response.data.bpi.USD.rate_float);
      });
      setInterval(() => {
           axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        context.dispatch("getCurrentPrice", response.data.bpi.USD.rate_float);
        context.dispatch('refreshData', response.data.bpi.USD.rate_float);
      });
      }, 5000);
  }