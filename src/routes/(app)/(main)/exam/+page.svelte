<script lang="ts">
    import FinishedQuestionsModal from "$lib/features/questions/FinishedQuestionsModal.svelte";
    import { getBackgroundState } from "$lib/features/ui/backgroundState.svelte";
    import type { PageProps } from "./$types";

    const {data}: PageProps = $props();
    const backgroundState = getBackgroundState();
</script>

<FinishedQuestionsModal show={backgroundState} />

