<script lang="ts">
    import type { Snippet } from "svelte";

    type QuestBoardProps = { children: Snippet }

    const { children }: QuestBoardProps = $props();
</script>

<div class="quest-container">
    {@render children()}
</div>

<style>
    .quest-container {
        text-align: center;
        background-color: white;
        border-radius: 10px;
        border: 0.2rem solid var(--light-green);
        width: 60%;
        height: 100%;
        padding: 1em;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }
</style>