<script lang="ts">
    import type { PerformanceForTopic } from "./performance.types";

    type PerformanceProps = {
        performancePerTopic: readonly PerformanceForTopic[]
    }

    const { performancePerTopic }: PerformanceProps = $props();
</script>

<div class="performance-list">
        {#each performancePerTopic as performance}
            <div class="performance">
                <h3>Performance for {performance.topic.name}</h3>
                    <div>Score: {performance.score} / 100</div>
                    <div>State: {performance.state}</div>
            </div>
        {/each}
</div>

<style>
    .performance-list {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .performance {
        padding: 1rem;
        border: 1px solid black;
    }
</style>