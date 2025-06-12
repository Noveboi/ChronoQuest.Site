<script lang="ts">
    import { goto } from "$app/navigation";
    import Modal from "$lib/common/components/modal/Modal.svelte";
    import { ModalActions } from "$lib/common/components/modal/modal.utils";
    import type { ChapterPreview } from "../chapters/chapters.types";

    type FinishedQuestionsModalProps = {
        show: boolean
        nextChapter: ChapterPreview | undefined,
        hasFinishedChapters: boolean
    }

    const { show, nextChapter, hasFinishedChapters }: FinishedQuestionsModalProps = $props();

    const actions = $derived(new ModalActions()
        .add('Review', () => goto('/review'), hasFinishedChapters)
        .add('Next Chapter', () => goto(`/chapters/${nextChapter!.id}`), nextChapter !== undefined && !hasFinishedChapters)
        .add('Home', () => goto('/'))
        .add('Close', ctx => ctx.close()))

    const prompt = $derived.by(() => {
        if (hasFinishedChapters) {
            return 'Take a quick review of the material before your exam.';
        }

        if (nextChapter) {
            return 'Go to the next chapter.'
        }
    });

</script>

<Modal {actions} {show}>
    <h2>You've finished the chapter's questions!</h2>
    <p>{prompt}</p>
</Modal>