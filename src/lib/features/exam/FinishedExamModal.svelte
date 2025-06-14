<script lang="ts">
    import { goto } from "$app/navigation";
    import Modal from "$lib/common/components/modal/Modal.svelte";
    import { ModalActions } from "$lib/common/components/modal/modal.utils";
    import { getQuestionState } from "../questions/questionState.svelte";

    const state = getQuestionState();
    const actions = new ModalActions()
        .add('Hooray!', async () => {
            await fetch('/exit', { method: 'POST' });
            goto('/');
        } )
        .add('Close', ctx => ctx.close())
</script>

{#if state.hasFinishedQuestions}
    <Modal show={true} {actions}>
        <h1>You've finished the exam!</h1>
    </Modal>
{/if}