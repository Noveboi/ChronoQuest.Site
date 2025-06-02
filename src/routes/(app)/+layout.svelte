<script lang="ts">
    import { goto } from '$app/navigation';
    import Button from '$lib/common/components/Button.svelte';
    import HomeIcon from '$lib/common/components/icons/HomeIcon.svelte';
    import LogoutIcon from '$lib/common/components/icons/LogoutIcon.svelte';
    import Navigate from '$lib/common/components/Navigate.svelte';
    import type { LayoutProps } from './$types';

    let { children }: LayoutProps = $props()

    const style = "padding: 8px 16px;"

    async function logout() {
        await fetch('/logout', { method: 'POST' });
        await goto('/login');
    }
</script>

<div class="toolbar">
    <Button type="button" {style} onClick={logout} showLoadingIndicator={false}>
        <LogoutIcon />
    </Button>
    <Navigate to='/' {style}>
        <HomeIcon />
    </Navigate>
</div>

<main class="content">
    {@render children()}
</main>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
    .toolbar {
        position: absolute;
        display: flex;
        padding: .5em;
        gap: .5em;
    }
</style>