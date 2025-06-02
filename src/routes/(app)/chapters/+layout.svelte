<script lang="ts">
    import Arrow from "$lib/common/components/Arrow.svelte";
    import type { LayoutProps } from "./$types";

    let { data, children }: LayoutProps = $props();
</script>

<div>
    {#each data.chapters as chapter}
        <a href="/chapters/{chapter.id}">{chapter.title}</a>
    {/each}
</div>

{@render children()}

<div class="arrow-container">
    <Arrow to= "">
    </Arrow>
</div>

<style>
    .arrow-container {
        display: flex;
        align-items: start;
        justify-content: center;
    }
</style>