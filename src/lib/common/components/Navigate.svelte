<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "./Button.svelte";
    import type { Snippet } from "svelte";

    type NavigateProps = { 
        to: string, 
        children: Snippet, 
        style?: string,
        onNavigate?: () => Promise<void>,
        disabled?: boolean,
        preload?: boolean
    }

    const { to, children, style, onNavigate, disabled = false, preload = true }: NavigateProps = $props();

    async function onClick() {
        if (!onNavigate)
            return;

        await onNavigate();
    }

    const href = $derived(to == '' ? null : to);
    const classes = $derived(disabled ? ' disabled' : '');
    const preloadData = $derived(preload ? 'hover' : 'off');
</script>

<a data-sveltekit-preload-data={preloadData} {href} onclick={onClick} class="navigate{classes}" aria-disabled="{disabled}">
    <Button {disabled} {style} {children} showLoadingIndicator={false} />
</a>

<style>
    .navigate.disabled {
        cursor: unset;
        user-select: none;
    }
</style>