<script lang="ts">
    import type { Snippet } from "svelte";
    import { render } from "svelte/server";

    type QuizTitleProps = { 
        children: Snippet
     }

    const { children }: QuizTitleProps = $props();
</script>

<div class="title-container">
    <h2 class="title-box">
        {@render children()}
    </h2>
</div>

<style>
    .title-container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 10px;
        min-width: 10%;
        height: 100%;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        overflow-x: hidden;
    }

    .title-box {
        background-color: var(--light-green);
        border-radius: 10px;
        padding: 2rem 2.5rem;
        color: white;
        font-size: 2.5rem;
        font-weight: lighter;
    }
</style>