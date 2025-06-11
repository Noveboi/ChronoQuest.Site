<script lang="ts">
    import type { ChapterPreview, ChapterPreviewQuestion } from "./chapters.types";

    const { chapter }: { chapter: ChapterPreview } = $props();

    const getClass = (question: ChapterPreviewQuestion) => {
        switch (question.status) {
            case "unanswered": return 'no-answer';
            case "correct": return 'correct';
            case "wrong": return 'wrong';
        }
    } 
</script>

<div class="switches">
    {#each chapter.questions as question}
        <div class="switch {getClass(question)}"></div>
    {/each}
</div>

<style lang="scss">
    .switches {
        display: flex;
        gap: 0;
        flex: 1;
        
        .switch {
            border: 1px solid black;
            flex: 1;
            
            &.no-answer {
                background: var(--disabled);
            }

            &.correct {
                background: var(--correct);
            }

            &.wrong {
                background: var(--error);
            }
        }
    }
</style>