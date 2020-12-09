<template>
    <div class="content">
        <h3>Check your trading skills</h3>
        <hr>
        <p>Use your own virtual bank account buying and selling coins for real-time ratio and find out how much profit you can get! </p>
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
import {Line} from 'vue-chartjs';
export default {
    extends: Line,
    mounted() {
        this.renderChart({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Bitcoin',
                data: [15, 20, 3, 14, 14, 15, 14],
                borderColor: 'darkorange',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            {
                label: 'Ethereum',
                data: [1, 14, 3, 20, 10, 11, 12],
                borderColor: 'orchid',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            {
                label: 'Lightcoin',
                data: [0.5, 2, 5, 11, 8, 5, 5],
                borderColor: 'grey',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }
            ]

        })
    }
}
</script>
