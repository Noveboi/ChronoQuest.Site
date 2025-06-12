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
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    .performance {
        padding: 1rem;
        border: 5px solid var(--light-green);
        background-color: white;
        border-radius: 10px;
    }
</style>