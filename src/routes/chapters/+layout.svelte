<script lang="ts">
    import Arrow from "$lib/common/components/Arrow.svelte";
    import type { LayoutProps } from "./$types";

    let { data, children }: LayoutProps = $props();
</script>

{@render children()}

<Arrow to= "">
</Arrow>