<script lang="ts">
    import type { Chapter } from "$lib/features/chapters/chapters.types";
    import TheoryBoard from "$lib/features/chapters/TheoryBoard.svelte";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    const chapter: Chapter = {
        id: '',
        title: 'Example!',
        content: 'Blah blah blahh......'
    } 
</script>

<TheoryBoard {chapter}/>