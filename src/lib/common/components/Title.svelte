<script>
  const { text = "Default Title", size = "2em" } = $props();
</script>

<h1 style="font-size: {size};">
  {text}
</h1>

<style>
  h1 {
    color: white;
    line-height: 1.2px;
    text-align: center;
    margin-bottom: 5rem;
    font-weight: lighter;
  }
</style>
