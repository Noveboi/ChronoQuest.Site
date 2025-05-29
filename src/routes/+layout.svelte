<script>
    import { auth } from '$lib/stores/auth.svelte';

    let { children } = $props()
</script>

<div class="gradient-background">
    <div>
        {@render children()}
    </div>
</div>

<style>
    .auth { color: green; font-weight: bolder; }
    .authnt { color: red;}
</style>