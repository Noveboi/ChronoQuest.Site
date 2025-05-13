<script lang="ts">
    import LoginForm from "$lib/features/auth/LoginForm.svelte";
    import Chapters from "$lib/features/theory/Chapters.svelte";
    import { auth } from "$lib/stores/auth.svelte";
</script>

<LoginForm/>

{#if auth.isAuthenticated}
    <Chapters />
{/if}