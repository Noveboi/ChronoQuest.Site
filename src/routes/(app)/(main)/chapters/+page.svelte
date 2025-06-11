<script lang="ts">
    import ChapterCard from "$lib/features/chapters/ChapterCard.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();   
</script>

<section>
    {#each data.chapters as chapter}
        <ChapterCard {chapter}/>
    {/each}
</section>

<style>
    section {
        display: flex;
        gap: 1rem;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>