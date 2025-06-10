import { getContext, setContext } from "svelte";

interface ModalContext {
    close: () => void;
}

export type ModalActions = Record<string, (context: ModalContext) => void>;

const KEY = "$ModalContext";
export const setModalContext = (context: ModalContext) => setContext<ModalContext>(KEY, context);
export const getModalContext = () => getContext<ModalContext>(KEY);