import { goto } from "$app/navigation";
import { auth } from "../../features/auth/auth.svelte";

type GuardFn = () => void;
const noOp = () => {};

export const isAuthenticated = (url: URL): GuardFn => {
    if (auth.isAuthenticated && url.href.endsWith('login')) {
        return () => goto('/');
    }

    if (!auth.isAuthenticated && !url.href.endsWith('login') && !url.href.endsWith('register')) {
        return () => goto('/login')
    }

    return noOp;
}