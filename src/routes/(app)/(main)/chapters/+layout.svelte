<script lang="ts">
    import { setChapterState } from "$lib/features/chapters/chapterState.svelte";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();

    setChapterState();
</script>

{@render children()}