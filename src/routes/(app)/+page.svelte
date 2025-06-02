<script lang="ts">
    import Navigate from "$lib/common/components/Navigate.svelte";
    import Title from "$lib/common/components/Title.svelte";
</script>

<Title size='large'> Welcome! </Title>

<div class="button-container">
    <Navigate to='/chapters'>Start</Navigate>
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