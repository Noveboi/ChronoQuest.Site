<script lang="ts">
    import Button from "$lib/common/components/Button.svelte";
</script>

<form class="form-container" method="POST">
  <input name="email" type="email" placeholder="Email"/>
  <input name="password" type="password" placeholder="Password"/>
  <Button type="submit">Enter</Button>
</form>

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
