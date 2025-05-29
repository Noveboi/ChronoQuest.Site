<script lang="ts">
import Title from "$lib/features/chapters/components/Title.svelte";
import Form from "$lib/features/chapters/components/Form.svelte";
import Button from "$lib/features/chapters/components/Button.svelte";

function handleClick() {
alert("Button clicked!");
}
</script>

<Title text="Login" size="4em" />

<div class="login-container">
    <Form />
    <Button on:click={handleClick} >
    Enter
    </Button>
</div>

<style>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>