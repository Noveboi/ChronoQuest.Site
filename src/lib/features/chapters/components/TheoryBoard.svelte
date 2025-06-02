<script>
    import Button from "../../../common/components/Button.svelte";
    import Title from "../../../common/components/Title.svelte";

    const { text = "Default Text", } = $props();
</script>

<div class="background chapter-container">
    <Title size='large' color='dark'>Chapter Title</Title>
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