<script lang="ts">
    import { onMount } from "svelte";
    import type { MasteryHistory } from "./mastery.stats.types";
    import { Chart } from "chart.js";

    type TopicMasteryChartProps = {
        mastery: MasteryHistory
    }

    const { mastery }: TopicMasteryChartProps = $props();
    let chartCanvas: HTMLCanvasElement;

    onMount(async () => {
        console.log(mastery.history.map(x => x.masteryLevel));

        new Chart(chartCanvas, {
            type: 'line',
            data: {
                xLabels: mastery.history.map(x => x.utcDateTime),
                datasets: [{
                    data: mastery.history.map(x => x.masteryLevel),
                }]
            },
            options: {
                plugins: {
                    title: {
                        text: `Mastery of ${mastery.topic.name}`,
                        display: true
                    }
                },
                scales: {
                    x: {
                        display: false
                    }
                }
            }
        })
    })
</script>

<canvas bind:this={chartCanvas} class="chart"></canvas>    