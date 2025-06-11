<script lang="ts">
    import { goto } from "$app/navigation";
    import Modal from "$lib/common/components/modal/Modal.svelte";
    import { ModalActions } from "$lib/common/components/modal/modal.utils";
    import type { Chapter, ChapterPreview } from "../chapters/chapters.types";

    type FinishedQuestionsModalProps = {
        show: boolean
        nextChapter: ChapterPreview | undefined,
    }

    const { show, nextChapter }: FinishedQuestionsModalProps = $props();
    const actions = $derived(new ModalActions()
        .add('Yes', () => goto(`/chapters/${nextChapter!.id}`), nextChapter !== undefined)
        .add('Go Home', () => goto('/'))
        .add('Close', ctx => ctx.close()))

    const prompt = $derived(nextChapter 
        ? 'Would you like to move on to the next chapter?'
        : 'Would you like to take a quick review of the material before taking the exam?'
    );

</script>

    <Modal {actions} {show}>
        <h2>You've finished the chapter's questions!</h2>
        <p>{prompt}</p>
    </Modal>