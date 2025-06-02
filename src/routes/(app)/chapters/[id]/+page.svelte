<script lang="ts">
    import TheoryBoard from "$lib/features/chapters/TheoryBoard.svelte";
    import type { PageProps } from "./$types";
    import { onExit } from "$lib/common/hooks/onExit";

    let { data }: PageProps = $props();

    onExit(async () => await fetch(`/chapters/${data.chapter.id}`))
</script>

<TheoryBoard chapter={data.chapter}/>