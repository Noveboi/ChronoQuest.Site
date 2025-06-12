<script lang="ts">
    import type { Snippet } from "svelte";
    import Title from "../../common/components/Title.svelte";

    type ReaderProps = {
        title: string,
        content: string,
        footer: Snippet
    }

    const { title, content, footer }: ReaderProps = $props();
</script>

<section>
    <Title size='large' color='dark'>{title}</Title>
    <p>
        {@html content}
    </p>
    {@render footer()}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
        overflow-y: auto;
        height: 85dvh;
        background-color: white;
        padding-bottom: 2rem;
        border-radius: 2em;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 1.4em;
        padding: 0em 1.2em 0em 1.2em;
    }
</style>