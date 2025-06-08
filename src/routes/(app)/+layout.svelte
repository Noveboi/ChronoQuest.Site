<script lang="ts">
    import { goto, invalidate } from '$app/navigation';
    import Button from '$lib/common/components/Button.svelte';
    import HomeIcon from '$lib/common/components/icons/HomeIcon.svelte';
    import LogoutIcon from '$lib/common/components/icons/LogoutIcon.svelte';
    import type { LayoutProps } from './$types';

    const style = "padding: 8px 16px;"
    let { children, data }: LayoutProps = $props();

    async function logout() {
        await fetch('/logout', { method: 'POST' });
        await goto('/login');
    }

    async function goHome() {
        await invalidate('app:marker');
        await goto('/');
    }
</script>

<div class="app">
    <div class="toolbar">
        <Button type="button" {style} onClick={logout} showLoadingIndicator={false}>
            <LogoutIcon />
        </Button>
        <Button onClick={goHome} {style} showLoadingIndicator={false}>
            <HomeIcon />
        </Button>
    </div>

    <main class="content">
        {@render children()}
    </main>
</div>

<style lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
    .toolbar {
        display: flex;
        padding: .5em;
        gap: .5em;
    }
    .app {
        display: flex;
        flex-direction: column;
        height: 100dvh;
        overflow-y: hidden
    }
</style>