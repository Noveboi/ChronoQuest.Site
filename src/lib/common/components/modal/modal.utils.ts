import { getContext, setContext } from "svelte";

interface ModalContext {
    close: () => void;
}

export class ModalActions {
    private _map: Map<string, (context: ModalContext) => void> = new Map();

    public add(name: string, action: (context: ModalContext) => void, predicate?: boolean): ModalActions {
        if (predicate ?? true) { 
            this._map.set(name, action);
        }        
        
        return this;
    }

    public get(actionName: string) {
        const action = this._map.get(actionName);

        if (!action) {
            throw new Error(`Action name '${actionName}' is not defined in the modal's actions.`);
        }

        return action;
    }

    public getNames() {
        return this._map.keys();
    }

    public getActions() {
        return this._map.values();
    }
}

const KEY = "$ModalContext";
export const setModalContext = (context: ModalContext) => setContext<ModalContext>(KEY, context);
export const getModalContext = () => getContext<ModalContext>(KEY);