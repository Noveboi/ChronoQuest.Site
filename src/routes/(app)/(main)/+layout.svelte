<script lang="ts">
    const { children } = $props();
</script>

<div id="app-main">
    {@render children()}
</div>

<style>
    #app-main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>