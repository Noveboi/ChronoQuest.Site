<script lang="ts">
    import humanizeDuration from "humanize-duration";
    import ChapterQuestionSwitches from "./ChapterQuestionSwitches.svelte";
    import type { ChapterPreview } from "./chapters.types";

    const { chapter }: { chapter: ChapterPreview } = $props();

    const readDuration = $derived(humanizeDuration((chapter.readSeconds ?? 0) * 1000));
    const totalQuests = $derived(chapter.questions?.length ?? 0);
    const answeredQuests = $derived(chapter.questions?.filter(x => x.status !== 'unanswered')?.length ?? 0);
</script>

<a href="/chapters/{chapter.id}" data-sveltekit-preload-data="off">
    <div class="card">
        <div class="card-header">
            <h2>{chapter.title}</h2>
        </div>
        <div class="card-body">
            <p>Read for <strong>{readDuration}</strong></p>
            <p>Answered: <strong>{answeredQuests}</strong> / <strong>{totalQuests}</strong></p>
        </div>
        <div class="card-footer">
            <ChapterQuestionSwitches {chapter}/>
        </div>
    </div>
</a>

<style lang="scss">
    a {
        all: unset;
        cursor: pointer;

        --border: 5px solid var(--light-green);
        --padding: 0.5rem;
    }

    .card {
        min-width: 250px;
        min-height: 350px;
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        border: var(--border);

        .card-body {
            padding: var(--padding);
            border-top: var(--border);
            border-bottom: var(--border);
            flex: 1;
        }

        .card-header {
            padding: 0 calc(var(--padding) * 2);
            text-align: center;
            flex-basis: content;
        }

        .card-footer {
            flex: 0.2;
            display: flex;
            flex-direction: column;
        }
    }
</style>