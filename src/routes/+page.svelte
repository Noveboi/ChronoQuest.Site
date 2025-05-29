<script lang="ts">
import Title from "$lib/features/chapters/components/Title.svelte";
import Button from "$lib/features/chapters/components/Button.svelte";

function handleClick() {
alert("Button clicked!");
}
</script>

<Title text="Welcome!" size="4em" />

<div class="button-container">
    <Button on:click={handleClick} >
    Chapters
    </Button>
    <Button on:click={handleClick} >
    Extras
    </Button>
    <Button on:click={handleClick} >
    Statistics
    </Button>
</div>

<style>
.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>