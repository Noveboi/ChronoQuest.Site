<script lang="ts">
    import { auth, login } from "$lib/stores/auth.svelte";
    import type { LoginRequest } from "$lib/types/requests.types";

    const request: LoginRequest = $state({
        email: '',
        password: ''
    })

    function onsubmit(e: SubmitEvent) {
        e.preventDefault()
        login(request)
    }
    
</script>

<form onsubmit={onsubmit}>
    <label for="email">Email</label>
    <input id="email" type="email" bind:value={request.email}>

    <label for="pass">Password</label>
    <input id="pass" type="password" bind:value={request.password}>

    <button type="submit">
        {#if auth.isLoading}
            Beep Boop...
        {:else}
            Sign In
        {/if}
    </button>

    {#if auth.error !== null}
        <p style="color: red; font-weight: bold;">{auth.error}</p>
    {/if}
</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        width: 200px;
        gap: 0.1rem;

        > input {
            margin-bottom: 1rem;
        }

        > button {
            margin-top: 1rem;
        }
    }
</style>