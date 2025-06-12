<script lang="ts">
    import MasteryCharts from "$lib/features/stats/mastery/MasteryCharts.svelte";
    import Performance from "$lib/features/stats/performance/Performance.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props(); 
</script>

<MasteryCharts masteries={data.masteries} />
<Performance performancePerTopic={data.performance}/>