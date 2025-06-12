<script lang="ts">
    import type { ChartData } from "$lib/common/components/chart/chart.props";
    import ChronoChart from "$lib/common/components/chart/ChronoChart.svelte";
    import humanizeDuration from "humanize-duration";
    import type { ChapterStats } from "./chapterStats.types";

    type ChapterStatsChartProps = { stats: ChapterStats }

    const { stats }: ChapterStatsChartProps = $props();

    const data: ChartData = $derived({
        xLabels: stats.readingTimePerDay.map(x => x.date),
        datasets: [
            { data: stats.readingTimePerDay.map(x => x.totalSeconds) }
        ]
    })
</script>

<div class="chart-container">
    <ChronoChart type='bar' datasets={data.datasets} title={stats.chapter.title} xLabels={data.xLabels} />
    <h4> Read for {humanizeDuration(Math.round(stats.totalReadingTime) * 1000)} seconds in total </h4>
</div>

<style>
    .chart-container {
        text-align: center;
    }
</style>