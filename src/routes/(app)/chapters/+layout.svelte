<script lang="ts">
    import Arrow from "$lib/common/components/Arrow.svelte";
    import type { LayoutProps } from "./$types";

    let { data, children }: LayoutProps = $props();
</script>

<div>
    <!-- THESE LINKS ARE TEMPORARY! Just so we can navigate to all the chapters for debugging purposes. -->
    <!-- THESE LINKS ARE TEMPORARY! Just so we can navigate to all the chapters for debugging purposes. -->
    <!-- THESE LINKS ARE TEMPORARY! Just so we can navigate to all the chapters for debugging purposes. -->
    <!-- THESE LINKS ARE TEMPORARY! Just so we can navigate to all the chapters for debugging purposes. -->
    <!-- THESE LINKS ARE TEMPORARY! Just so we can navigate to all the chapters for debugging purposes. -->
    {#each data.chapters as chapter}
        <a data-sveltekit-preload-data='tap' href="/chapters/{chapter.id}">{chapter.title}</a> <br/>
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