import { goto } from "$app/navigation";
import { auth } from "../stores/auth.svelte";

type GuardFn = () => void;
const noOp = () => {};

export const isAuthenticated = (url: URL): GuardFn => {
    if (auth.isAuthenticated && url.href.includes('login')) {
        return () => goto('/');
    }

    if (url.href.includes('login')) {
        return () => goto('/login')
    }

    return noOp;
}