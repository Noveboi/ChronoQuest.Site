<script lang="ts">
    import type { MasteryHistory } from "./mastery.stats.types";
    import TopicMasteryChart from "./TopicMasteryChart.svelte";

    type MasteryChartsProps = {
        masteries: readonly MasteryHistory[]
    }

    const { masteries: histories }: MasteryChartsProps = $props();
</script>

<div class="mastery-charts">
    {#each histories as mastery}
        <div class="mastery-chart">
            <TopicMasteryChart {mastery}/>
        </div>
    {/each}
</div>

<style lang="scss">
    .mastery-charts {
        display: flex;
        gap: 1rem;
        width: 100%;
        align-items: baseline;
        justify-content: flex-start;

        padding: 1rem;

        > .mastery-chart {
            flex: 1;
        }
    }
</style>