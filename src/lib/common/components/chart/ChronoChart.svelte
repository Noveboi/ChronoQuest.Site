<script lang="ts">
    import { Chart } from "chart.js";
    import { onMount } from "svelte";
    import type { ChartProps } from "./chart.props";

    let chartCanvas: HTMLCanvasElement;
    const props: ChartProps = $props();
    
    const getMaxLength = () => props.datasets.reduce(
        (max, dataset) => Math.max(max, dataset.data.length),
        0
    );

    onMount(() => {
        new Chart(chartCanvas, {
            type: props.type,
            data: {
                labels: props.labels,
                xLabels: props.xLabels ?? Array.from({ length: getMaxLength() }, (_, i) => i + 1),
                datasets: props.datasets.map(set => ({
                    data: set.data,
                    backgroundColor: set.colorPalette
                }))
            },
            options: {
                plugins: {
                    legend: {
                        display: props.showLegend
                    },
                    title: {
                        text: props.title,
                        display: props.title !== undefined
                    }
                },
                scales: {
                    x: {
                        display: props.xAxis?.display ?? true,
                        min: props.xAxis?.min,
                        max: props.xAxis?.max
                    },
                    y: {
                        display: props.yAxis?.display ?? true,
                        min: props.yAxis?.min,
                        max: props.yAxis?.max
                    }
                }
            }
        })
    })
</script>

<div class="chart-parent">
    <canvas bind:this={chartCanvas}></canvas>
</div>

<style>
    .chart-parent {
        position: relative;
    }
    canvas {
        background: rgba(0, 0, 0, 0.75);
        max-height: 75vh;
        max-width: 90vw;
    }
</style>