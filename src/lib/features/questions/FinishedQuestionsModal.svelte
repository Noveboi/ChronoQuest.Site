<script lang="ts">
    import { goto } from "$app/navigation";
    import Modal from "$lib/common/components/modal/Modal.svelte";
    import type { ModalActions } from "$lib/common/components/modal/modal.utils";
    import type { Chapter, ChapterPreview } from "../chapters/chapters.types";

    type FinishedQuestionsModalProps = {
        show: boolean
        nextChapter: ChapterPreview | undefined,
    }

    const { show, nextChapter }: FinishedQuestionsModalProps = $props();
    const actions: ModalActions = {
        'Yes': async () => {
            if (nextChapter) {
                await goto(`/chapters/${nextChapter.id}`);
            } else {
                await goto('/');
            }
        } ,
        'Go Home': () => goto('/')
    }

    const prompt = $derived(nextChapter 
        ? 'Would you like to move on to the next chapter?'
        : 'Would you like to take a quick review of the material before taking the exam?'
    );

</script>

    <Modal {actions} {show}>
        <p>
            You have finished all the chapter's questions.
        </p>
        <p>
            {prompt}
        </p>
    </Modal>