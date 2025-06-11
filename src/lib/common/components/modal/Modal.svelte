<script lang="ts">
    import type { Snippet } from "svelte";
    import { setModalContext, type ModalActions } from "./modal.utils";
    import Button from "../Button.svelte";

    type ModalProps = {
        actions: ModalActions
        children: Snippet
        show: boolean
    };

    let { show, children, actions }: ModalProps = $props();

    const close = () => show = false;
    const context = setModalContext({close});

    const makeAction = (action: string) => {
        return () => {
            const func = actions.get(action);
            func(context);
            return Promise.resolve();
        }
    }
</script>

{#if show}
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modal-content">
                {@render children()}
            </div>
            <div class="modal-actions">
                {#each actions.getNames() as action}
                    <Button onClick={makeAction(action)} showLoadingIndicator={false}>{action}</Button>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    .modal-backdrop {
        position: fixed;
        inset: 0;
        height: 100dvh;
        width: 100dvw;
        z-index: 1055;
        background-color: rgba(0, 0, 0, .5);

        > .modal {
            position: relative;
            background-color: var(--light-blue);
            max-width: 50%;
            min-height: 200px;
            display: flex;
            flex-direction: column;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            padding: 2rem;

            .modal-content {
                flex: 1;
            }

            .modal-actions {
                display: flex;
                gap: 1rem;
            }
        }
    }
</style>