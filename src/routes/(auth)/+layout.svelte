<script lang="ts">
    import type { LayoutProps } from "./$types";

    const { children }: LayoutProps = $props();
</script>

<main class="auth-content">
    {@render children()}
</main>

<style>
    .auth-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>