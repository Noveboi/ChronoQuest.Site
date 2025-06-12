<script lang="ts">
    import ChartCollection from "$lib/common/components/chart/ChartCollection.svelte";
    import type { QuestionStats } from "$lib/features/stats/questions/questionStats.types";
    import QuestionStatsChart from "$lib/features/stats/questions/QuestionStatsChart.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
</script>

{#snippet chart(stats: QuestionStats)}
    <QuestionStatsChart {stats} />
{/snippet}

<ChartCollection {chart} stats={data.stats}/>