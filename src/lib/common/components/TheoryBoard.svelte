<script>
    import Button from "./Button.svelte";
    import Title from "./Title.svelte";

    const { text = "Default Text", size = "2em" } = $props();
</script>

<div class="background chapter-container">
    <Title text="Chapter" size="4em" color="black" />
    <p>
        {@html text}
    </p>
    <Button>Take the Quiz</Button>
</div>

<style>
    .background {
        background-color: white;
        width: 60%;
        height: 80%;
        border-radius: 2em;
    }

    .chapter-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
        overflow-y: auto;
    }

    p {
        font-size: 1.4em;
        padding: 0em 1.2em 0em 1.2em;
    }
</style>