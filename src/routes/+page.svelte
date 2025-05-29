<script lang="ts">
    import Navigate from "$lib/common/components/Navigate.svelte";
    import Title from "$lib/common/components/Title.svelte";
</script>

<Title text="Welcome!" size="4em" />

<div class="button-container">
    <Navigate to='/chapters'>Chapters</Navigate>
    <Navigate to='/extras'>Extras</Navigate> <!-- What is this? -->
    <Navigate to='/stats'>Statistics</Navigate>
</div>

<style>
.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>