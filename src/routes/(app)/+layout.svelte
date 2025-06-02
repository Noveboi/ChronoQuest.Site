<script lang="ts">
    import { goto } from '$app/navigation';
    import type { LayoutProps } from './$types';

    let { children }: LayoutProps = $props()

    async function logout() {
        await fetch('/logout', { method: 'POST' });
        await goto('/login');
    }
</script>

<button type="button" style="position: absolute" onclick={logout}>Logout</button>

<main class="content">
    {@render children()}
</main>

<style>
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>