<script>
  export let onClick = () => {};
  export let type = "button";
</script>

<button type={"button"} on:click={onClick}>
  <slot>Click Me</slot>
</button>

<style>
  button {
    background-color: #FF4203;
    color: white;
    padding: 0.75em 1.5em;
    font-size: 1rem;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease, transform 0.1s ease;
  }

  button:hover {
    background-color: #CC3300;
  }
</style>
