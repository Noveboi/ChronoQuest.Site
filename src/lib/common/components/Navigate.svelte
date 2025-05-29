<script lang="ts">
    import Button from "./Button.svelte";
    import type { Snippet } from "svelte";

    type NavigateProps = { to: string, children: Snippet }

    const { to, children }: NavigateProps = $props();
</script>

<a href={to}>
    <Button children={children}>
    </Button>
</a>