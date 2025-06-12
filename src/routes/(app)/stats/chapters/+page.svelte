<script lang="ts">
    import ChartCollection from "$lib/common/components/chart/ChartCollection.svelte";
    import type { ChapterStats } from "$lib/features/stats/chapters/chapterStats.types";
    import ChapterStatsChart from "$lib/features/stats/chapters/ChapterStatsChart.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
</script>

{#snippet chart(stats: ChapterStats)}
    <ChapterStatsChart {stats}/>
{/snippet}

<ChartCollection stats={data.stats} {chart} />