import { Line, mixins } from "vue-chartjs";

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: ['chartData'],
    data() {
        return {
            options: {
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                },
                legend: {
                    display: false
                },
                maintainAspectRatio: false
            }
        }
    }
}