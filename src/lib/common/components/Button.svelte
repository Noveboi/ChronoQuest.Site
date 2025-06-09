<script lang="ts">
  import type { Snippet } from "svelte";

  type ButtonProps = { 
    onClick?: () => Promise<void>, 
    type?: 'button' | 'submit', 
    loading?: boolean,
    showLoadingIndicator?: boolean
    style?: string,
    disabled?: boolean
    children: Snippet 
  };

  let { onClick, children, style, disabled = false, loading = $bindable(), type = 'button', showLoadingIndicator = true }: ButtonProps = $props();
    
  async function handleClick() {
    if (onClick !== undefined) {
      showLoadingIndicator && (loading = true);
      await onClick();
      showLoadingIndicator && (loading = false);
    }
  } 

</script>

<button {disabled} style={style} type={type} onclick={handleClick}>
  {#if loading}
    <span class="spinner"></span>
  {/if}
  {@render children()}
</button>

<style>
  button {
    background-color: #FF4203;
    color: white;
    padding: 0.5em 1em;
    font-size: 2em;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: background-color 0.2s;
  }

  button[disabled]{
    background-color: var(--disabled);
    cursor: default;
  }

  button:not([disabled]):hover {
    background-color: #af340b;
  }

.spinner {
  display: inline-block;
  box-sizing: border-box;

  width: 40px;
  height: 40px;
}
.spinner:after {
  content: " ";
  display: block;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
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
