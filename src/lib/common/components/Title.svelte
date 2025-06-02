<script lang="ts" >
    import type { Snippet } from "svelte";

  type TitleProps = {
    children: Snippet,
    size?: 'small' | 'normal' | 'large',
    color?: 'light' | 'dark'
  }


  const { children, size = 'normal', color = 'light' }: TitleProps = $props();

  let fontSize = $derived.by(() => {
    switch (size) {
      case "small": return '1em'
      case "normal": return '2em'
      case "large": return '4em'
    }
  })
</script>

<h1 style="font-size: {fontSize};" class={color}>
  {@render children()}
</h1>

<style>
  h1 {
    line-height: 1.2px;
    text-align: center;
    margin-bottom: 4rem;
    font-weight: lighter;
    color: white;
  }

  h1.dark {
    color: #111;
  }
</style>
