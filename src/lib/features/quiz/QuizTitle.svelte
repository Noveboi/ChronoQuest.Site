<script lang="ts">
    import type { Snippet } from "svelte";

    type QuizTitleProps = { 
        children: Snippet
     }

    const { children }: QuizTitleProps = $props();
</script>