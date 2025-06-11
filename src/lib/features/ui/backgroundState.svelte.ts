import { getContext, setContext } from "svelte";

class BackgroundState {
    startColor: CssColors = $state('green');
    endColor: CssColors = $state('blue');

    readonly startColorCss = $derived(`var(--${this.startColor})`);
    readonly endColorCss = $derived(`var(--${this.endColor})`);

    reset() {
        const bg = new BackgroundState();
        this.startColor = bg.startColor;
        this.endColor = bg.endColor;
    }
}

const KEY = '$_BackgroundState';
export const getBackgroundState = () => getContext<BackgroundState>(KEY);
export const setBackgroundState = () => setContext<BackgroundState>(KEY, new BackgroundState());