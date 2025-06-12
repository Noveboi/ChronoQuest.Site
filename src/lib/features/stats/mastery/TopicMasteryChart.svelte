<script lang="ts">
    import type { MasteryHistory } from "./mastery.stats.types";
    import ChronoChart from "$lib/common/components/chart/ChronoChart.svelte";
    import type { ChartDatasets } from "$lib/common/components/chart/chart.props";

    type TopicMasteryChartProps = {
        mastery: MasteryHistory
    }

    const { mastery }: TopicMasteryChartProps = $props();
    const title = $derived(`Mastery of ${mastery.topic.name}`)
    const datasets: ChartDatasets = $derived([
        { data: mastery.history.map(x => x.masteryLevel) }
    ]);

</script>

<ChronoChart {datasets} {title} type='line' xAxis={{display: false}} yAxis={{min: 0, max: 1.02}}/>