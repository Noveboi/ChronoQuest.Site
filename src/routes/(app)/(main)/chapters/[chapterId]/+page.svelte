<script lang="ts">
    import TheoryBoard from "$lib/features/chapters/TheoryBoard.svelte";
    import { onExit } from "$lib/common/hooks/onExit";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    onExit(async () => await fetch(`/chapters/${data.chapter.id}`))
</script>

<TheoryBoard chapter={data.chapter}/>