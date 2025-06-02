<script lang="ts">
    import Button from "./Button.svelte";
    import type { Snippet } from "svelte";

    type NavigateProps = { to: string, children: Snippet, style?: string }

    const { to, children, style }: NavigateProps = $props();
</script>

<a href={to}>
    <Button {style} {children} showLoadingIndicator={false}/>
</a>