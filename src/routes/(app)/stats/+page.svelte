<script lang="ts">
    import ChartCollection from "$lib/common/components/chart/ChartCollection.svelte";
    import type { MasteryHistory } from "$lib/features/stats/mastery/mastery.stats.types";
    import MasteryChart from "$lib/features/stats/mastery/MasteryChart.svelte";
    import Performance from "$lib/features/stats/performance/Performance.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props(); 
</script>

{#snippet chart(mastery: MasteryHistory)}
    <MasteryChart {mastery}/> 
{/snippet}

<ChartCollection {chart} stats={data.masteries}/>
<Performance performancePerTopic={data.performance}/>