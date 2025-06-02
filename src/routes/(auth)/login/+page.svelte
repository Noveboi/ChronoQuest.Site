<script lang="ts">
    import Title from "$lib/common/components/Title.svelte";
    import Form from "$lib/features/user/Form.svelte";
    import type { PageProps } from "./$types";

    const { form }: PageProps = $props();
</script>

<Title size='large'> Login </Title>

<div class="login-container">
    <Form action='login'/>
    <a href="/register">Create Account</a>

    {#each form?.errors ?? [] as error}
        <p class="error">{error}</p>
    {/each}
</div>

<style>
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .error {
        color: var(--error);
        font-weight: 600;
    }
</style>