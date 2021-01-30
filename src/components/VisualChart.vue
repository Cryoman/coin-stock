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
  props: ['currentData'],
  data() {
    return {
      dataCollection: null,
    };
  },
  computed: {
  },
   mounted() {
    //await this.$store.dispatch('drawChart')
      this.fillData(this.currentData)
  },
  methods: {
    getVisualData() {
      this.$store.dispatch("drawChart");
    },
    fillData(val) {
      this.dataCollection = {
        labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        datasets: [
          {
            label: "Bitcoin",
            data: val,
            borderColor: "darkorange",
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        ],
      };
    },
  },
  watch: {
    currentData(oldval, newval) {
      this.fillData(newval);
    }
  }
};
</script>