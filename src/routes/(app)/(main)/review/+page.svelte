<script lang="ts">
    import ReviewMaterialReader from "$lib/features/review/ReviewMaterialReader.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
</script>

<section>
    {#if data.review}
        <ReviewMaterialReader review={data.review}/>
    {/if}
</section>

<style>
    section {
        padding: 1rem
    }
</style>