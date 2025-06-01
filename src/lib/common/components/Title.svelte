<script>
  const { text = "Default Title", size = "2em", color = "white" } = $props();
</script>

<h1 style="font-size: {size}; color: {color};">
  {text}
</h1>

<style>
  h1 {
    line-height: 1.2px;
    text-align: center;
    margin-bottom: 4rem;
    font-weight: lighter;
  }
</style>
