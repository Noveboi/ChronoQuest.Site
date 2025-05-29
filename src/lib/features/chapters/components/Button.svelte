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
</style>
