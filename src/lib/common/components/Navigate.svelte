<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "./Button.svelte";
    import type { Snippet } from "svelte";

    type NavigateProps = { 
        to: string, 
        children: Snippet, 
        style?: string,
        onNavigate?: () => Promise<void>
    }

    const { to, children, style, onNavigate }: NavigateProps = $props();

    async function onClick() {
        if (!onNavigate)
            return;

        await onNavigate();
    }

</script>

<a href={to} onclick={onClick}>
    <Button {style} {children} showLoadingIndicator={false} />
</a>