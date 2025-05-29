<script lang="ts">
  import type { Snippet } from "svelte";

  type ButtonProps = { 
    onClick?: () => Promise<void>, 
    type?: 'button' | 'submit', 
    children: Snippet };

  const { onClick, type = 'button', children }: ButtonProps = $props();
    
  let loading = $state(false);

  async function handleClick() {
    if (onClick !== undefined) {
      loading = true;
      await onClick();
      loading = false;
    }
  } 

</script>

<button type={type} onclick={handleClick}>
  {#if loading}
    <span class="spinner"></span>
  {/if}
  {@render children()}
</button>

<style>
  button {
    background-color: #FF4203;
    color: white;
    width: 12rem;
    padding: 0.5em 1em;
    margin: 0.5rem;
    font-size: 2em;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease, transform 0.1s ease;
  }

  button:hover {
    background-color: #CC3300;
  }

.spinner {
  display: inline-block;
  box-sizing: border-box;

  width: 80px;
  height: 80px;
}
.spinner:after {
  content: " ";
  box-sizing: border-box;
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6.4px solid currentColor;
  border-color: currentColor transparent currentColor transparent;
  animation: spinner 1.2s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>
