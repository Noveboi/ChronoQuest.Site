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
                xLabels: props.xLabels ?? Array.from({ length: getMaxLength() }, (_, i) => i + 1),
                datasets: props.datasets,
            },
            options: {
                plugins: {
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

<canvas bind:this={chartCanvas}></canvas>

<style>
    canvas {
        background: rgba(0, 0, 0, 0.75);
        max-height: 75vh;
        max-width: 90vw;
    }
</style>