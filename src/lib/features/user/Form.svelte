<script lang="ts">
    import Button from "$lib/common/components/Button.svelte";
    import { auth } from "$lib/features/auth/auth.svelte";

  type FormProps = { onSubmit: (email: string, password: string) => Promise<void> }

  const { onSubmit }: FormProps = $props();
  let email = $state('');
  let password = $state('');
  let loading = $state(false);

  async function handleSubmit() {
    loading = true;

    try {
      await onSubmit(email, password);
    } catch (err) { 
      loading = false;
    }

    loading = false;
  }

</script>

<form class="form-container" onsubmit={handleSubmit}>
  <input type="text" placeholder="Email" bind:value={email} />
  <input type="password" placeholder="Password" bind:value={password} />
  <Button {loading} type="submit">Enter</Button>
</form>

{#if auth.error}
  <p class="error">{auth.error}</p>
{/if}

<style>
  .form-container {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }

  .form-container input {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 0.8rem;
    width: 16rem;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
</style>
