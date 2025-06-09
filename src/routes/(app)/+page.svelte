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

<Title size='large'> Welcome! </Title>
<p>MARKER: {marker ? JSON.stringify(marker) : 'null'}</p>

<div class="button-container">
    <Navigate to={startUrl}>{hasStarted ? 'Continue' : 'Start'}</Navigate>
    <Navigate to='/stats'>Statistics</Navigate>
</div>

<style lang="scss">
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