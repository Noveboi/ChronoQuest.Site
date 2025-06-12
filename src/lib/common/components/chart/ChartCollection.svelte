<script lang="ts" generics="T extends {}">
    import type { Snippet } from 'svelte';

    type ChartCollectionProps = { 
        stats: readonly T[], 
        chart: Snippet<[T]>,
        appearance?: {
            columns?: number,
            gap?: string
        } 
    }

    const { stats, chart, appearance }: ChartCollectionProps = $props();
    const style: Partial<CSSStyleDeclaration> = $derived(appearance 
        ? {
            gridTemplateColumns: `repeat(${appearance.columns ?? 3}, 1fr)`,
            gap: appearance.gap ?? '1rem'
        }  
        : {});

</script>

<section 
    style:--columns={appearance?.columns ?? 3}
    style:gap={appearance?.gap ?? '1rem'}
    >
    {#each stats as stats}
        <div class="chart">
            {@render chart(stats)}
        </div>
    {/each}
</section>

<style lang='scss'>
    section {
        --columns: 3;

        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
    }
</style>