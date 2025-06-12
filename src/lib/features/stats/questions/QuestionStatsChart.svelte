<script lang="ts">
    import type { ChartData } from "$lib/common/components/chart/chart.props";
    import ChronoChart from "$lib/common/components/chart/ChronoChart.svelte";
    import type { QuestionStats } from "./questionStats.types";

    type QuestionStatsChart = { stats: QuestionStats }
    const { stats }: QuestionStatsChart = $props();

    const data: ChartData = {
        labels: ['Wrong', 'Correct'],
        datasets: [
            { 
                data: [100 - stats.correctAnswersPercentage, stats.correctAnswersPercentage],
                colorPalette: ['#f10000', '#55e800']
            }
        ]
    }

</script>

<div class="chart-container">
    <ChronoChart 
        type='pie' 
        datasets={data.datasets} 
        labels={data.labels} 
        title={stats.topic.name} 
        xAxis={{display: false}}
        yAxis={{display:false}}
        showLegend={true}/>
    
</div>
