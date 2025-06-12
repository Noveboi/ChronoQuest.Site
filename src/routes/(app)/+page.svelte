<script lang="ts">
    import Navigate from "$lib/common/components/Navigate.svelte";
    import Title from "$lib/common/components/Title.svelte";
    import { getMarkerContext, setMarkerContext } from "$lib/features/user/UserMarker";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();

    setMarkerContext(data.marker);

    const marker = getMarkerContext();
    const startUrl = $derived(marker.url);
    const hasStarted = $derived(marker.hasStarted());
</script>

<div id="app-home">
    <Title size='large'> Welcome! </Title>

    <div class="button-container">
        <Navigate to={startUrl} preload={false}>{hasStarted ? 'Continue' : 'Start'}</Navigate>
        <Navigate to='/chapters'>Chapters</Navigate>
        <Navigate to='/stats'>Statistics</Navigate>

        <Navigate to='/exam'>(TEMP) Exam</Navigate>
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