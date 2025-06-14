<script lang="ts">
    import Navigate from "$lib/common/components/Navigate.svelte";
    import Title from "$lib/common/components/Title.svelte";
    import { getMarkerContext, setMarkerContext } from "$lib/features/user/UserMarker";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();

    setMarkerContext(data.marker);

    const marker = getMarkerContext();
    const startUrl = $derived(marker.url);

    const mainText = marker.hasStarted() 
        ? marker.examId 
            ? 'Exam'
            : 'Continue'
        : 'Begin';
</script>

<div id="app-home">
    <Title size='large'> Welcome! </Title>

    <div class="button-container">
        <Navigate to={startUrl} preload={false}>{mainText}</Navigate>
        {#if !marker.examId}
            <Navigate to='/chapters'>Chapters</Navigate>
        {/if}
        <Navigate to='/stats'>Statistics</Navigate>
    </div>
</div>

<style lang="scss">
    #app-home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .button-container {
        min-width: 16em;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        gap: 1em;

        :global(button) {
            width: 100%;
        }
    }
</style>