<template>
  <div>
    <chart ref="chart" :chart-data="dataCollection"></chart>
  </div>
</template>
<script>
import chart from "./../chart";
export default {
  components: {
    chart,
  },
  data() {
    return {
      dataCollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.dataCollection = {
        labels: ["", "", "", "", "", "", ""],
        datasets: [
          {
            label: "Bitcoin",
            data: [33130.56, 33138.40, 33124.49, 33066.77, 32959.25, 32662.98, 32729.89],
            borderColor: "darkorange",
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        ]
      };
    },
  },
};
</script>